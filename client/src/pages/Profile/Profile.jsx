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
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';

const Profile = () => {
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();
	console.log(currentUser);
	return (
		<StyledProfile>
			<StyledProfileHeader>
				<SecondaryButton
					text={'BACK'}
					buttonIcon={'/images/button-arrow.svg'}
					url={'/'}
				/>
				<SecondaryButton text={'EDIT'} url={'/profile-edit'} />
			</StyledProfileHeader>

			<StyledMainProfileContentContainer>
				<StyledProfileImage src={currentUser.profileImg} alt='' />
				<div>
					<StyledUsername>{currentUser.userName}</StyledUsername>
					<p>Followers: {currentUser.likes.othersLikes}</p>
				</div>
			</StyledMainProfileContentContainer>
			<div>
				<p>{currentUser.email}</p>
				<p>Bio</p>
				<p>{currentUser.bio}</p>
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
