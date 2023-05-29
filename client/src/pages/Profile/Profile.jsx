import { signOut } from 'firebase/auth';

import {
	StyledButton,
	StyledMainProfileContentContainer,
	StyledProfile,
	StyledProfileImage,
	StyledUsername
} from './styles';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import HeaderBack from '../../components/header-back/HeaderBack';

const Profile = () => {
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();
	if (!currentUser) return;
	return (
		<StyledProfile>
			<HeaderBack
				url={'/'}
				text={'BACK'}
				secondaryText={'EDIT'}
				secondaryUrl={'/profile-edit'}
			/>

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
		</StyledProfile>
	);
};
const handleSubmit = async navigate => {
	await signOut(auth);
	navigate('/');
};

export default Profile;
