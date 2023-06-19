import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/inputValidation';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import {
	EmailAuthProvider,
	deleteUser,
	getAuth,
	reauthenticateWithCredential
} from 'firebase/auth';
import {
	StyledDeleteAccount,
	StyledErrorText,
	StyledImportantNote,
	StyledInput,
	StyledInputContainer
} from './styles';
import MainButton from '../main-button/MainButton';
import SocialDeleteAccount from '../SocialDeleteAccount/SocialDeleteAccount';
import CrossButton from '../cross-button/CrossButton';

const DeleteAccountModal = ({
	setFetchInfo,
	currentUser,
	fetchUrl,
	url,
	setContent
}) => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	return (
		<StyledDeleteAccount>
			<h2>DELETE ACCOUNT</h2>
			<CrossButton setState={setContent} stateValue={null} />
			<SocialDeleteAccount
				currentUser={currentUser}
				fetchUrl={fetchUrl}
				url={url}
				setFetchInfo={setFetchInfo}
			/>
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, setFetchInfo, currentUser, fetchUrl, url)
				)}
			>
				<StyledInputContainer>
					<label htmlFor='email'>Email</label>
					<StyledInput type='text' {...register('email')} />
				</StyledInputContainer>
				<StyledInputContainer>
					<label htmlFor='password'>Password</label>
					<StyledInput
						type='password'
						{...register('password', FORM_VALIDATIONS.password)}
					/>
					<StyledErrorText>{errors?.email?.message}</StyledErrorText>
				</StyledInputContainer>
				<MainButton text={'Accept'} width={'250px'} type={'submit'} />
			</form>
			<StyledImportantNote>Important note: </StyledImportantNote>
			<StyledImportantNote>
				If you register your account with Google, click continue with Google to
				delete the account and data attached to this app if not use your email
				and password above.
			</StyledImportantNote>
		</StyledDeleteAccount>
	);
};

const onSubmit = async (
	formData,
	e,
	setFetchInfo,
	currentUser,
	fetchUrl,
	url
) => {
	e.preventDefault();

	try {
		const auth = await getAuth();
		const user = await auth.currentUser;

		// Solicitar al usuario que vuelva a autenticarse antes de eliminar la cuenta

		const credential = EmailAuthProvider.credential(
			formData.email,
			formData.password
		);

		// Volver a autenticar al usuario
		await reauthenticateWithCredential(user, credential);

		// Eliminar la cuenta del usuario
		try {
			await deleteUser(user);
			await setFetchInfo({
				url: fetchUrl + currentUser._id,
				options: {
					method: METHODS.DELETE,
					body: JSON.stringify(),
					headers: HEADERS
				},
				navigateTo: url || undefined
			});
		} catch (error) {
			console.log(error);
		}
	} catch (error) {}
};

export default DeleteAccountModal;
