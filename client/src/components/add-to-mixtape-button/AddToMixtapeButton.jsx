import { useContext, useState } from 'react';
import { StyledAddButton } from './styles';
import ButtonIcon from '../button-icon/ButtonIcon';
import Modal from '../modal/Modal';
import AddToMixtape from '../add-to-mixtape/AddToMixtape';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Auth.context';

const AddToMixtapeButton = ({ id }) => {
	const [content, setContent] = useState(null);
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	const navigate = useNavigate();
	if (loadingFirebase) return;

	if (!currentUser) {
		return (
			<StyledAddButton onClick={() => navigate('/register')}>
				<ButtonIcon img={'/images/add_mixtape.svg'} />
			</StyledAddButton>
		);
	}
	return (
		<>
			<StyledAddButton
				onClick={() =>
					setContent(<AddToMixtape setContent={setContent} id={id} />)
				}
			>
				<ButtonIcon img={'/images/add_mixtape.svg'} />
			</StyledAddButton>
			<Modal>{content}</Modal>
		</>
	);
};

export default AddToMixtapeButton;
