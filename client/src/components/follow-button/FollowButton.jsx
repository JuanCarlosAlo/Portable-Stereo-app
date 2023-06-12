import { useContext } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { AuthContext } from '../../context/Auth.context';
import { useNavigate } from 'react-router-dom';
import { USERS_URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import { StyledFollowingButton } from './styles';

const FollowButton = ({ id }) => {
	const { setFetchInfo } = useFetch();
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	const navigate = useNavigate();
	if (loadingFirebase) return;
	if (!currentUser) {
		return (
			<StyledFollowingButton onClick={() => navigate('/register')}>
				+ Follow
			</StyledFollowingButton>
		);
	}
	const alreadyFollowing = currentUser.follows.selfFollows.find(
		song => song === id
	);
	return (
		<StyledFollowingButton
			onClick={() => handleClick(setFetchInfo, navigate, currentUser, id)}
			following={alreadyFollowing}
		>
			{alreadyFollowing ? 'Following' : '+ Follow'}
		</StyledFollowingButton>
	);
};

const handleClick = (setFetchInfo, navigate, currentUser, id) => {
	if (!currentUser) navigate('/register');
	setFetchInfo({
		url: USERS_URLS.FOLLOWS_UPDATE + currentUser._id,
		options: {
			method: METHODS.PATCH,
			body: JSON.stringify({ id }),
			headers: HEADERS
		}
	});
};

export default FollowButton;
