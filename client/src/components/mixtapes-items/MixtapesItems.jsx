import { useNavigate } from 'react-router-dom';
import {
	StyledContent,
	StyledImg,
	StyledInfoContainer,
	StyledMixtapeContainer,
	StyledMixtapeInfo,
	StyledMixtapeTitle
} from './styles';

import DeleteButton from '../deleteButton/DeleteButton';

const MixtapesItems = ({ title, allData, author, cover, edit, id }) => {
	const navigate = useNavigate();
	return (
		<StyledMixtapeContainer>
			<StyledContent
				onClick={() => navigate(`/song/${title}`, { state: allData })}
			>
				<StyledImg src={cover} alt='' />
				<StyledInfoContainer>
					<StyledMixtapeTitle>{title}</StyledMixtapeTitle>
					<StyledMixtapeInfo>{author}</StyledMixtapeInfo>
				</StyledInfoContainer>
			</StyledContent>
			{edit && <DeleteButton id={id} />}
		</StyledMixtapeContainer>
	);
};

export default MixtapesItems;
