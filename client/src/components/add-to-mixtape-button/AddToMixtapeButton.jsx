import { useState } from 'react';
import { StyledAddButton } from './styles';
import ButtonIcon from '../button-icon/ButtonIcon';
import Modal from '../modal/Modal';
import AddToMixtape from '../add-to-mixtape/AddToMixtape';

const AddToMixtapeButton = ({ id }) => {
	const [content, setContent] = useState(null);
	console.log(content);
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
