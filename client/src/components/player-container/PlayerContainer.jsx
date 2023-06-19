import { useContext } from 'react';
import { StyledPlayerContainer } from './styles';
import { SongContext } from '../../context/Song.context';

import Player from '../player/Player';

const PlayerContainer = () => {
	const { songData } = useContext(SongContext);
	if (!songData) return;
	const file = songData.song;
	const index = songData.index;

	return (
		<StyledPlayerContainer>
			<Player file={file} index={index} />
		</StyledPlayerContainer>
	);
};

export default PlayerContainer;
