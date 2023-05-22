import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledText } from './styles';

const SecondaryButton = ({ text, buttonIcon, url }) => {
	const navigate = useNavigate();
	return (
		<StyledButton onClick={() => navigate(url)}>
			{buttonIcon && <img src={buttonIcon} alt='' />}
			<StyledText>{text}</StyledText>
		</StyledButton>
	);
};

export default SecondaryButton;
