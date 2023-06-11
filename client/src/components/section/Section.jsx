import { v4 } from 'uuid';
import {
	StyledBar,
	StyledContent,
	StyledSection,
	StyledSectionTitle,
	StyledShowMoreButton,
	StyledSliderContainer,
	StyledTitleContainer
} from './styles';
import Preview from '../preview/Preview';
import { useState } from 'react';

const Section = ({ title, allData, more }) => {
	const [showMore, setShowMore] = useState(false);
	if (!allData) return <h2>Loading</h2>;
	if (allData.length === 0) return;

	return (
		<StyledSection>
			<StyledTitleContainer>
				<StyledSectionTitle>{title}</StyledSectionTitle>
				{more ? (
					<StyledShowMoreButton onClick={() => setShowMore(!showMore)}>
						+ Show more
					</StyledShowMoreButton>
				) : (
					<StyledBar />
				)}
			</StyledTitleContainer>
			<StyledSliderContainer setShowMore={showMore}>
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
