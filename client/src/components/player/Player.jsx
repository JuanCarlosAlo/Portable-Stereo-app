import { useContext } from 'react';
import { StyledPlayerContainer } from './styles';
import { SongContext } from '../../context/Song.context';
import { AudioPlayerProvider } from 'react-use-audio-player';
import PlayerControls from '../player-controls/PlayerControls';
import PlayerPlaybar from '../player-playbar/PlayerPlaybar';
const Player = () => {
	const { songData } = useContext(SongContext);
	if (!songData) return;

	return (
		<AudioPlayerProvider>
			<StyledPlayerContainer>
				<PlayerControls file={songData} />
				<PlayerPlaybar />
			</StyledPlayerContainer>
		</AudioPlayerProvider>
	);
};

export default Player;
