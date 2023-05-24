import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { StyledButton, StyledButtonIcon } from './styles';
import { HEADERS } from '../../constants/headers';
import { FORM_DEFAULT_VALUES } from '../../constants/inputValidation';
import { USERS_URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';

const SocialLogin = ({ setFetchInfo }) => {
	return (
		<StyledButton onClick={() => registerWithGoogle(setFetchInfo)}>
			Continue in with Google
			<StyledButtonIcon src={'/images/google-tile.svg'} alt='Google icon' />
		</StyledButton>
	);
};

const registerWithGoogle = async setFetchInfo => {
	const provider = new GoogleAuthProvider();

	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const userName = 'UserName' + Date.now();

		setFetchInfo({
			url: USERS_URLS.POST,
			options: {
				method: METHODS.POST,
				body: JSON.stringify({
					_id: result.user.uid,
					userName,
					email: result.user.email,
					...FORM_DEFAULT_VALUES
				}),
				headers: HEADERS
			},
			navigateTo: '/'
		});
	} catch (error) {
		console.log(error);
	}
};

export default SocialLogin;
