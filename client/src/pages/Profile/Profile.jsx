import { signOut } from 'firebase/auth';
import Player from '../../components/player/Player';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import {
	StyledButton,
	StyledMainProfileContentContainer,
	StyledProfile,
	StyledProfileHeader,
	StyledProfileImage,
	StyledUsername
} from './styles';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	const navigate = useNavigate();
	return (
		<StyledProfile>
			<StyledProfileHeader>
				<SecondaryButton
					text={'BACK'}
					buttonIcon={'/images/button-arrow.svg'}
					url={'/'}
				/>
			</StyledProfileHeader>

			<StyledMainProfileContentContainer>
				<StyledProfileImage src='' alt='' />
				<div>
					<StyledUsername>Username</StyledUsername>
					<p>Followers: 0</p>
				</div>
			</StyledMainProfileContentContainer>
			<div>
				<p>Email</p>
				<p>Bio</p>
				<p></p>
			</div>

			<div>
				<StyledButton onClick={e => handleSubmit(navigate)}>
					Log Out
				</StyledButton>
				<StyledButton>Delete Account</StyledButton>
			</div>

			<Player />
		</StyledProfile>
	);
};
const handleSubmit = async navigate => {
	await signOut(auth);
	navigate('/');
};

export default Profile;
