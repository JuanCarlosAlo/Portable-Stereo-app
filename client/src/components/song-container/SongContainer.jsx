import LikeButton from '../like-button/LikeButton';
import PlayButton from '../play-button/PlayButton';
import { StyledSongContainer, StyledSongPlayContainer } from './styles';

const SongContainer = ({ songData, index, title, replays, id }) => {
	return (
		<StyledSongContainer>
			<p>{title}</p>
			<StyledSongPlayContainer>
				{replays && <p>{replays}</p>}
				<LikeButton id={id} />
				<PlayButton songData={songData} indexValue={index} />
			</StyledSongPlayContainer>
		</StyledSongContainer>
	);
};

export default SongContainer;
