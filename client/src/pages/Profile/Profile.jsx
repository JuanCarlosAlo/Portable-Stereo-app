import { signOut } from 'firebase/auth';

import {
	StyledButton,
	StyledButtonsContainer,
	StyledDataTitle,
	StyledMainProfileContentContainer,
	StyledProfile,
	StyledProfileImage,
	StyledUsername,
	Styledtext
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
					<StyledDataTitle>
						Followers: {currentUser.follows.othersFollows}
					</StyledDataTitle>
				</div>
			</StyledMainProfileContentContainer>
			<div>
				<StyledDataTitle>Email</StyledDataTitle>
				<Styledtext>{currentUser.email}</Styledtext>
				<StyledDataTitle>Bio</StyledDataTitle>
				<StyledDataTitle>{currentUser.bio}</StyledDataTitle>
			</div>

			<StyledButtonsContainer>
				<StyledButton onClick={e => handleSubmit(navigate)}>
					Log Out
				</StyledButton>
				<StyledButton>Delete Account</StyledButton>
			</StyledButtonsContainer>
		</StyledProfile>
	);
};
const handleSubmit = async navigate => {
	await signOut(auth);
	navigate('/');
};

export default Profile;
