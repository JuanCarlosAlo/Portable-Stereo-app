import { useContext } from 'react';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { USERS_URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import ButtonIcon from '../button-icon/ButtonIcon';
import { StyledLikeButton } from './styles';
import { AuthContext } from '../../context/Auth.context';
import { useNavigate } from 'react-router-dom';

const LikeButton = ({ id }) => {
	const { setFetchInfo } = useFetch();
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	const navigate = useNavigate();
	if (loadingFirebase) return;
	const alreadyLiked = currentUser.likes.find(song => song === id);

	return (
		<StyledLikeButton
			onClick={() => handleClick(id, setFetchInfo, currentUser, navigate)}
		>
			<ButtonIcon
				img={
					alreadyLiked ? '/images/heart-like.png' : '/images/heart-dislike.png'
				}
			/>
		</StyledLikeButton>
	);
};
const handleClick = (id, setFetchInfo, currentUser, navigate) => {
	if (!currentUser) navigate('/register');
	setFetchInfo({
		url: USERS_URLS.LIKES_UPDATE + currentUser._id,
		options: {
			method: METHODS.PATCH,
			body: JSON.stringify({ id }),
			headers: HEADERS
		}
	});
};

export default LikeButton;
