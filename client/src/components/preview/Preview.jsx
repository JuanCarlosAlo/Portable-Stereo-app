import { StyledImg, StyledMixtape, StyledPreview, StyledTitle } from './styles';

const Preview = ({ type, img, title, mixtape }) => {
	if (!mixtape) {
		return (
			<StyledPreview>
				<StyledImg src={img} alt='Preview image' type={type} />
				<StyledTitle>{title}</StyledTitle>
			</StyledPreview>
		);
	} else {
		return (
			<StyledMixtape>
				<StyledImg src={img} type={type} />
				<p>{title}</p>
			</StyledMixtape>
		);
	}
};

export default Preview;
