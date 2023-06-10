import ButtonIcon from '../button-icon/ButtonIcon';
import { StyledCrossButton } from './styles';

const CrossButton = ({ setState, stateValue }) => {
	return (
		<StyledCrossButton onClick={() => setState(stateValue)}>
			<ButtonIcon img={'/images/cross.svg'} />
		</StyledCrossButton>
	);
};

export default CrossButton;
