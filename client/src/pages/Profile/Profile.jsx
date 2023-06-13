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
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth.context';
import HeaderBack from '../../components/header-back/HeaderBack';
import Modal from '../../components/modal/Modal';
import { useFetch } from '../../hooks/useFetch';
import { USERS_URLS } from '../../constants/urls';
import DeleteAccountModal from '../../components/delete-account-modal/DeleteAccountModal';

const Profile = () => {
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();
	const { setFetchInfo } = useFetch();
	const [content, setContent] = useState(null);
	if (!currentUser) return;
	return (
		<>
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
					<Styledtext>{currentUser.bio}</Styledtext>
				</div>

				<StyledButtonsContainer>
					<StyledButton onClick={e => handleSubmit(navigate)}>
						Log Out
					</StyledButton>
					<StyledButton
						onClick={() =>
							setContent(
								<DeleteAccountModal
									setFetchInfo={setFetchInfo}
									currentUser={currentUser}
									fetchUrl={USERS_URLS.DELETE_USER}
									url={'/'}
									setContent={setContent}
								/>
							)
						}
					>
						Delete Account
					</StyledButton>
				</StyledButtonsContainer>
			</StyledProfile>
			<Modal>{content}</Modal>
		</>
	);
};
const handleSubmit = async navigate => {
	await signOut(auth);
	navigate('/');
};

export default Profile;
