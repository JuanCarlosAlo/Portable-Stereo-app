import { useContext } from 'react';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { useFetch } from '../../hooks/useFetch';
import ButtonIcon from '../button-icon/ButtonIcon';
import { StyledDeleteButton } from './styles';
import { AuthContext } from '../../context/Auth.context';
import { USERS_URLS } from '../../constants/urls';

const DeleteButton = ({ id }) => {
	const { setFetchInfo } = useFetch();
	const { currentUser } = useContext(AuthContext);
	return (
		<StyledDeleteButton
			onClick={() => handleClick(id, setFetchInfo, currentUser)}
		>
			<ButtonIcon img={'/images/cross.svg'} />
		</StyledDeleteButton>
	);
};

const handleClick = (id, setFetchInfo, currentUser) => {
	setFetchInfo({
		url: USERS_URLS.DELETE_MIXTAPE + currentUser._id,
		options: {
			method: METHODS.DELETE,
			body: JSON.stringify({ id }),
			headers: HEADERS
		}
	});
};

export default DeleteButton;
