import { createUserWithEmailAndPassword } from 'firebase/auth';
import MainButton from '../../components/main-button/MainButton';
import {
	FORM_DEFAULT_VALUES,
	FORM_VALIDATIONS
} from '../../constants/inputValidation';
import {
	StyledErrorText,
	StyledInput,
	StyledInputContainer,
	StyledRegister
} from './styles';
import { useForm } from 'react-hook-form';
import { auth } from '../../config/firebase.config';
import { Navigate } from 'react-router-dom';
import { StyledProfileHeader } from '../Profile/styles';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import { useFetch } from '../../hooks/useFetch';
import { URLS } from '../../constants/urls';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import SocialLogin from '../../components/social-logIn/SocialLogin';
const Register = () => {
	const { currentUser } = useContext(AuthContext);

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	const { data, loading, error, setFetchInfo } = useFetch({ url: URLS.ALL });
	const [verificationError, setVerificationError] = useState();

	if (currentUser) return <Navigate to={'/'} />;
	if (loading) return <h2>Loading</h2>;
	if (error) return <h2>Error</h2>;
	return (
		<StyledRegister>
			<StyledProfileHeader>
				<SecondaryButton
					text={'BACK'}
					buttonIcon={'/images/button-arrow.svg'}
					url={'/'}
				/>
			</StyledProfileHeader>
			<h2>Register</h2>
			<SocialLogin setFetchInfo={setFetchInfo} />
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, setFetchInfo, data, setVerificationError)
				)}
			>
				<StyledInputContainer>
					<label htmlFor='email'>Email</label>
					<StyledInput
						type='text'
						name='email'
						id='email'
						{...register('email', FORM_VALIDATIONS.email)}
					/>
					<StyledErrorText>{errors?.email?.message}</StyledErrorText>
				</StyledInputContainer>
				<StyledInputContainer>
					<label htmlFor='password'>Password</label>
					<StyledInput
						type='password'
						name='password'
						id='password'
						{...register('password', FORM_VALIDATIONS.password)}
					/>
					<StyledErrorText>{errors?.password?.message}</StyledErrorText>
				</StyledInputContainer>
				{verificationError && (
					<StyledErrorText>{verificationError}</StyledErrorText>
				)}
				<MainButton text={'Next'} width={'250px'} type={'submit'} />
			</form>
		</StyledRegister>
	);
};

const onSubmit = async (
	formData,
	e,
	setFetchInfo,
	data,
	setVerificationError
) => {
	e.preventDefault();
	const { email, password } = formData;

	const emailUsed = data.find(user => user.email === email);
	if (!emailUsed) {
		try {
			const userRegistered = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			await setFetchInfo({
				url: URLS.POST,
				options: {
					method: METHODS.POST,
					body: JSON.stringify({
						_id: userRegistered.user.uid,
						email,
						userName: Date.now(),
						...FORM_DEFAULT_VALUES
					}),
					headers: HEADERS
				}
			});
		} catch (error) {
			setVerificationError(error);
		}
	}
};

export default Register;
