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

const SectionMixtapes = ({ title, allData }) => {
	if (!allData) return <h2>Loading</h2>;
	return (
		<StyledSection>
			<StyledTitleContainer>
				<p>{title}</p>
				<StyledBar></StyledBar>
				<SecondaryButton text={'Show all'} url={'/'} />
			</StyledTitleContainer>
			<StyledSliderContainer>
				<StyledContent>
					<Preview
						mixtape={true}
						title={'Add new mixtape'}
						img={'/images/add_file.jpg'}
					/>
					{allData.map(element => (
						<Preview
							key={v4()}
							type={element.type}
							title={element.type === 'user' ? element.userName : element.title}
							img={element.type === 'user' ? element.profileImg : element.cover}
						/>
					))}
				</StyledContent>
			</StyledSliderContainer>
		</StyledSection>
	);
};

export default SectionMixtapes;
