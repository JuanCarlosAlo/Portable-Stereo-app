import { useForm } from 'react-hook-form';
import {
	StyledErrorText,
	StyledInput,
	StyledInputContainer,
	StyledSignIn
} from './styles';
import { FORM_VALIDATIONS } from '../../constants/inputValidation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import MainButton from '../../components/main-button/MainButton';
import { useNavigate } from 'react-router-dom';

import SocialLogin from '../../components/social-logIn/SocialLogin';
import { useFetch } from '../../hooks/useFetch';
import HeaderBack from '../../components/header-back/HeaderBack';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import { useState } from 'react';

const Login = () => {
	const [firebaseErrors, setFirebaseErrors] = useState('');
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	const navigate = useNavigate();
	const { setFetchInfo } = useFetch();
	return (
		<StyledSignIn>
			<HeaderBack url={'/'} text={'BACK'} />
			<h2>SING IN</h2>
			<SocialLogin setFetchInfo={setFetchInfo} />
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, navigate, setFirebaseErrors)
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
					<StyledErrorText>{errors?.email?.message}</StyledErrorText>
				</StyledInputContainer>
				<MainButton width={'250px'} text={'Log In'} />
				{firebaseErrors && <StyledErrorText>{firebaseErrors}</StyledErrorText>}
			</form>
			<p>You already have an account?</p>
			<SecondaryButton text={'Register here'} url={'/register'} />
		</StyledSignIn>
	);
};

const onSubmit = async (formData, e, navigate, setFirebaseErrors) => {
	e.preventDefault();
	const { email, password } = formData;

	try {
		await signInWithEmailAndPassword(auth, email, password);
		navigate('/');
	} catch (error) {
		setFirebaseErrors(error.error);
	}
};

export default Login;
