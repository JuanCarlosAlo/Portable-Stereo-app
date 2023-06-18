import {
	GoogleAuthProvider,
	deleteUser,
	getAuth,
	reauthenticateWithCredential,
	signInWithPopup
} from 'firebase/auth';

import { StyledButton, StyledButtonIcon } from './styles';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';

const SocialDeleteAccount = ({ setFetchInfo, currentUser, fetchUrl, url }) => {
	return (
		<StyledButton
			onClick={() =>
				registerWithGoogle(setFetchInfo, currentUser, fetchUrl, url)
			}
		>
			Continue in with Google
			<StyledButtonIcon src={'/images/google-tile.svg'} alt='Google icon' />
		</StyledButton>
	);
};

const registerWithGoogle = async (setFetchInfo, currentUser, fetchUrl, url) => {
	const provider = new GoogleAuthProvider();
	const auth = getAuth();
	const user = auth.currentUser;

	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);

		await reauthenticateWithCredential(user, credential);
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

		// User deleted.
	} catch (error) {
		console.log(error);
		// An error ocurred
		// ...
	}
};

export default SocialDeleteAccount;
