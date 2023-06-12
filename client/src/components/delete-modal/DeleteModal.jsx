import { deleteObject, ref } from 'firebase/storage';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';

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
	index,
	fetchUrl,
	deleteUser
}) => {
	return (
		<StyledDeleteModal>
			<p>Are you sure you want to delete {title}?</p>
			<StyledButtonsContainer>
				<StyledEditButton onClick={() => setContent(null)}>No</StyledEditButton>
				<StyledEditButton
					onClick={() =>
						handleClick(
							id,
							setFetchInfo,
							currentUser,
							setContent,
							url,
							index,
							fetchUrl,
							deleteUser
						)
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
	index,
	fetchUrl,
	deleteUser
) => {
	if (index) {
		const storageRefDelete = ref(storage, currentUser.mixtapes[index].cover);
		try {
			await deleteObject(storageRefDelete);
		} catch (error) {}
	}
	if (deleteUser) {
		await setFetchInfo({
			url: fetchUrl + currentUser._id,
			options: {
				method: METHODS.DELETE,
				body: JSON.stringify(),
				headers: HEADERS
			},
			navigateTo: url || undefined
		});

		try {
			// delete user account
		} catch (error) {}
	} else {
		console.log(fetchUrl);
		await setFetchInfo({
			url: fetchUrl + currentUser._id,
			options: {
				method: METHODS.DELETE,
				body: JSON.stringify({ id }),
				headers: HEADERS
			},
			navigateTo: url || undefined
		});
	}

	setContent(null);
};

export default DeleteModal;
