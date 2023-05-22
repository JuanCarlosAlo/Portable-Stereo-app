import { createUserWithEmailAndPassword } from 'firebase/auth';
import MainButton from '../../components/main-button/MainButton';
import { FORM_VALIDATIONS } from '../../constants/inputValidation';
import {
	StyledErrorText,
	StyledInput,
	StyledInputContainer,
	StyledRegister
} from './styles';
import { useForm } from 'react-hook-form';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';
import { StyledProfileHeader } from '../Profile/styles';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
const Register = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	const navigate = useNavigate();
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
					<StyledErrorText>{errors?.password?.message}</StyledErrorText>
				</StyledInputContainer>
				<MainButton text={'Next'} width={'250px'} type={'submit'} />
			</form>
		</StyledRegister>
	);
};

const onSubmit = async (formData, e, navigate) => {
	e.preventDefault();
	const { email, password } = formData;
	console.log(formData, e);
	try {
		const userRegistered = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		console.log(email, password, userRegistered);
		navigate('/');
	} catch (error) {
		console.log(error);
	}
};

export default Register;
