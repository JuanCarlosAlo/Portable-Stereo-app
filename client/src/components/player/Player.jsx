import { useContext } from 'react';
import { StyledPlayerContainer } from './styles';
import { SongContext } from '../../context/Song.context';

const Player = () => {
	const { songData } = useContext(SongContext);
	if (!songData) return;
	console.log(songData);
	return (
		<StyledPlayerContainer>
			<p>PLAYER</p>
		</StyledPlayerContainer>
	);
};

export default Player;
