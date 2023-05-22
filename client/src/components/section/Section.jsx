import { StyledBar, StyledSection, StyledTitleContainer } from './styles';

const Section = ({ title }) => {
	return (
		<StyledSection>
			<StyledTitleContainer>
				<p>{title}</p>
				<StyledBar></StyledBar>
			</StyledTitleContainer>
		</StyledSection>
	);
};

export default Section;
