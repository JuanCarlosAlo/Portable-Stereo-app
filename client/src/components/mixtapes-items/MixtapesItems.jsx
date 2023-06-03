import { useNavigate } from 'react-router-dom';
import {
	StyledContent,
	StyledImg,
	StyledInfoContainer,
	StyledMixtapeContainer,
	StyledMixtapeInfo,
	StyledMixtapeTitle
} from './styles';

const MixtapesItems = ({ title, allData, author }) => {
	console.log(allData);
	const navigate = useNavigate();
	return (
		<StyledMixtapeContainer
			onClick={() => navigate(`/song/${title}`, { state: allData })}
		>
			<StyledContent>
				<StyledImg src='/images/liked_mixtape.svg' alt='' />
				<StyledInfoContainer>
					<StyledMixtapeTitle>{title}</StyledMixtapeTitle>
					<StyledMixtapeInfo>{author}</StyledMixtapeInfo>
				</StyledInfoContainer>
			</StyledContent>
		</StyledMixtapeContainer>
	);
};

export default MixtapesItems;
