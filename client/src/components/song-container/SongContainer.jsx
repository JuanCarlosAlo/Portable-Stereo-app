import AddToMixtapeButton from '../add-to-mixtape-button/AddToMixtapeButton';

import LikeButton from '../like-button/LikeButton';
import PlayButton from '../play-button/PlayButton';
import {
	StyledSongContainer,
	StyledSongPlayContainer,
	StyledTitle
} from './styles';

const SongContainer = ({ songData, index, title, replays, id }) => {
	return (
		<StyledSongContainer>
			<StyledTitle>{title}</StyledTitle>
			<StyledSongPlayContainer>
				{replays && <p>{replays}</p>}
				<AddToMixtapeButton id={id} />
				<LikeButton id={id} />
				<PlayButton songData={songData} indexValue={index} />
			</StyledSongPlayContainer>
		</StyledSongContainer>
	);
};

export default SongContainer;
