import { deleteObject, ref } from 'firebase/storage';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { USERS_URLS } from '../../constants/urls';
import { storage } from '../../config/firebase.config';
import {
	StyledButtonsContainer,
	StyledDeleteModal,
	StyledEditButton
} from './styles';

const DeleteModal = ({
	id,
	setFetchInfo,
	currentUser,
	setContent,
	title,
	url,
	index
}) => {
	return (
		<StyledDeleteModal>
			<p>Are you sure you want to delete {title}?</p>
			<StyledButtonsContainer>
				<StyledEditButton onClick={() => setContent(null)}>No</StyledEditButton>
				<StyledEditButton
					onClick={() =>
						handleClick(id, setFetchInfo, currentUser, setContent, url, index)
					}
				>
					Yes
				</StyledEditButton>
			</StyledButtonsContainer>
		</StyledDeleteModal>
	);
};

const handleClick = async (
	id,
	setFetchInfo,
	currentUser,
	setContent,
	url,
	index
) => {
	if (url) {
		await setFetchInfo({
			url: USERS_URLS.DELETE_MIXTAPE + currentUser._id,
			options: {
				method: METHODS.DELETE,
				body: JSON.stringify({ id }),
				headers: HEADERS
			},
			navigateTo: url
		});
		const storageRefDelete = ref(storage, currentUser.mixtapes[index].cover);
		try {
			await deleteObject(storageRefDelete);
		} catch (error) {}
		setContent(null);
	} else {
		await setFetchInfo({
			url: USERS_URLS.DELETE_MIXTAPE + currentUser._id,
			options: {
				method: METHODS.DELETE,
				body: JSON.stringify({ id }),
				headers: HEADERS
			}
		});
		setContent(null);
	}
};

export default DeleteModal;
