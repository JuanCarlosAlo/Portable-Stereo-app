import { v4 } from 'uuid';
import {
	StyledBar,
	StyledContent,
	StyledSection,
	StyledSliderContainer,
	StyledTitleContainer
} from './styles';
import Preview from '../preview/Preview';
import SecondaryButton from '../secondary-button/SecondaryButton';

const Section = ({ title, allData, url }) => {
	if (!allData) return <h2>Loading</h2>;
	return (
		<StyledSection>
			<StyledTitleContainer>
				<p>{title}</p>
				<StyledBar></StyledBar>
				{url && <SecondaryButton text={'Show all'} />}
			</StyledTitleContainer>
			<StyledSliderContainer>
				<StyledContent>
					{allData.map(element => (
						<Preview
							key={v4()}
							type={element.type}
							title={element.type === 'user' ? element.userName : element.title}
							img={element.type === 'user' ? element.profileImg : element.cover}
							songData={element}
						/>
					))}
				</StyledContent>
			</StyledSliderContainer>
		</StyledSection>
	);
};

export default Section;
