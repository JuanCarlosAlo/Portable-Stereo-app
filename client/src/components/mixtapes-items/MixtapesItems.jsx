import { useNavigate } from 'react-router-dom';
import {
	StyledContent,
	StyledImg,
	StyledInfoContainer,
	StyledMixtapeContainer,
	StyledMixtapeInfo,
	StyledMixtapeTitle
} from './styles';
import DeleteButton from '../delete-button/DeleteButton';

const MixtapesItems = ({ title, allData, author, cover, edit, id, url }) => {
	const navigate = useNavigate();
	return (
		<StyledMixtapeContainer>
			<StyledContent
				onClick={() => navigate(`/mixtape/${allData._id}`, { state: allData })}
			>
				<StyledImg src={cover} alt='' />
				<StyledInfoContainer>
					<StyledMixtapeTitle>{title}</StyledMixtapeTitle>
					<StyledMixtapeInfo>{author}</StyledMixtapeInfo>
				</StyledInfoContainer>
			</StyledContent>
			{edit && <DeleteButton id={id} title={title} url={url} />}
		</StyledMixtapeContainer>
	);
};

export default MixtapesItems;
