import SecondaryButton from '../secondary-button/SecondaryButton';
import { StyledBackHeader } from './styles';

const HeaderBack = ({ text, url, secondaryText, secondaryUrl }) => {
	return (
		<StyledBackHeader>
			<SecondaryButton
				text={text}
				buttonIcon={'/images/button-arrow.svg'}
				url={url}
			/>
			{secondaryText && (
				<SecondaryButton text={secondaryText} url={secondaryUrl} />
			)}
		</StyledBackHeader>
	);
};

export default HeaderBack;
