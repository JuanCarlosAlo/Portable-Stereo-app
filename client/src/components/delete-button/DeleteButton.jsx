import { useContext, useState } from 'react';

import { useFetch } from '../../hooks/useFetch';
import ButtonIcon from '../button-icon/ButtonIcon';
import { StyledDeleteButton } from './styles';
import { AuthContext } from '../../context/Auth.context';

import DeleteModal from '../delete-modal/DeleteModal';
import Modal from '../modal/Modal';

const DeleteButton = ({ id, title, url, index, fetchUrl }) => {
	const [content, setContent] = useState(null);
	const { setFetchInfo } = useFetch();
	const { currentUser } = useContext(AuthContext);
	return (
		<>
			<StyledDeleteButton
				onClick={() =>
					setContent(
						<DeleteModal
							id={id}
							setFetchInfo={setFetchInfo}
							currentUser={currentUser}
							setContent={setContent}
							title={title}
							url={url}
							index={index}
							fetchUrl={fetchUrl}
						/>
					)
				}
			>
				<ButtonIcon img={'/images/cross.svg'} />
			</StyledDeleteButton>
			<Modal>{content}</Modal>
		</>
	);
};

export default DeleteButton;
