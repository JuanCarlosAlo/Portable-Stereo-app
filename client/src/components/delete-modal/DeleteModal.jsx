import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { USERS_URLS } from '../../constants/urls';

const DeleteModal = ({
	id,
	setFetchInfo,
	currentUser,
	setContent,
	title,
	url
}) => {
	return (
		<div>
			<p>Are you sure you want to delete {title}?</p>
			<button onClick={() => setContent(null)}>no</button>
			<button
				onClick={() =>
					handleClick(id, setFetchInfo, currentUser, setContent, url)
				}
			>
				yes
			</button>
		</div>
	);
};

const handleClick = async (id, setFetchInfo, currentUser, setContent, url) => {
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
