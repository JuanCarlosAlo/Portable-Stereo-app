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
import { USERS_URLS } from '../../constants/urls';

const MixtapesItems = ({
	title,
	allData,
	author,
	cover,
	edit,
	id,
	url,
	index
}) => {
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
			{edit && (
				<DeleteButton
					id={id}
					title={title}
					url={url}
					index={index}
					fetchUrl={USERS_URLS.DELETE_MIXTAPE}
				/>
			)}
		</StyledMixtapeContainer>
	);
};

export default MixtapesItems;
