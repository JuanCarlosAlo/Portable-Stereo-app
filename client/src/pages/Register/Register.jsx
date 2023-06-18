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

import { useFetch } from '../../hooks/useFetch';
import { USERS_URLS } from '../../constants/urls';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import SocialLogin from '../../components/social-logIn/SocialLogin';
import HeaderBack from '../../components/header-back/HeaderBack';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
const Register = () => {
	const { currentUser } = useContext(AuthContext);
	const [firebaseErrors, setFirebaseErrors] = useState('');
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	const { data, loading, error, setFetchInfo } = useFetch({
		url: USERS_URLS.ALL
	});

	if (currentUser) return <Navigate to={'/'} />;
	if (loading) return <h2>Loading</h2>;
	if (error) return <h2>Error</h2>;
	return (
		<StyledRegister>
			<HeaderBack url={'/'} text={'BACK'} />
			<h2>REGISTER</h2>
			<SocialLogin setFetchInfo={setFetchInfo} />

			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, setFetchInfo, data, setFirebaseErrors)
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
				{firebaseErrors && <StyledErrorText>{firebaseErrors}</StyledErrorText>}
				<MainButton text={'Next'} width={'250px'} type={'submit'} />
			</form>
			<p>You already have an account?</p>
			<SecondaryButton text={'Login here'} url={'/login'} />
		</StyledRegister>
	);
};

const onSubmit = async (formData, e, setFetchInfo, data, setFirebaseErrors) => {
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
				url: USERS_URLS.POST,
				options: {
					method: METHODS.POST,
					body: JSON.stringify({
						_id: userRegistered.user.uid,
						email,
						artist: false,
						userName: Date.now(),
						...FORM_DEFAULT_VALUES
					}),
					headers: HEADERS
				}
			});
		} catch (error) {
			setFirebaseErrors(error.error);
		}
	}
};

export default Register;
