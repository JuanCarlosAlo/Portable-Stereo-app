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
	fetchUrl
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
							fetchUrl
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
	fetchUrl
) => {
	if (index) {
		const storageRefDelete = ref(storage, currentUser.mixtapes[index].cover);
		try {
			await deleteObject(storageRefDelete);
		} catch (error) {
			console.log(error);
		}
	}
	try {
		await setFetchInfo({
			url: fetchUrl + currentUser._id,
			options: {
				method: METHODS.DELETE,
				body: JSON.stringify({ id }),
				headers: HEADERS
			},
			navigateTo: url || undefined
		});
	} catch (error) {
		console.log(error);
	}

	setContent(null);
};

export default DeleteModal;
