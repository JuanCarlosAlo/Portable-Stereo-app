import {
	StyledBanner,
	StyledCassete,
	StyledSubtitle,
	StyledTape,
	StyledTitle,
	StyledTitleContainer
} from './styles';

const Banner = () => {
	return (
		<StyledBanner>
			<StyledTitleContainer>
				<StyledTitle>DASS</StyledTitle>
				<StyledSubtitle>Portable stereo player</StyledSubtitle>
			</StyledTitleContainer>
			<StyledCassete>
				<StyledTape
					animate={{ rotate: 360 }}
					transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
				/>
			</StyledCassete>
		</StyledBanner>
	);
};

export default Banner;
