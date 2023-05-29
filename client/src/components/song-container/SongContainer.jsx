import PlayButton from '../play-button/PlayButton';
import { StyledSongContainer, StyledSongPlayContainer } from './styles';

const SongContainer = ({ songData, index, title, replays }) => {
	return (
		<StyledSongContainer>
			<p>{title}</p>
			<StyledSongPlayContainer>
				{replays && <p>{replays}</p>}

				<PlayButton songData={songData} indexValue={index} />
			</StyledSongPlayContainer>
		</StyledSongContainer>
	);
};

export default SongContainer;
