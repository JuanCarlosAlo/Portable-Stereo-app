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

const Login = () => {
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
			<SocialLogin setFetchInfo={setFetchInfo} />
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, navigate)
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
			</form>
		</StyledSignIn>
	);
};

const onSubmit = async (formData, e, navigate) => {
	e.preventDefault();
	const { email, password } = formData;

	try {
		await signInWithEmailAndPassword(auth, email, password);
		navigate('/');
	} catch (error) {}
	// e.target.reset();
};

export default Login;
