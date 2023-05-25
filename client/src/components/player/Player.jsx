import { usePlayer } from '../../hooks/usePlayer';
import { StyledPlayerContainer } from './styles';

const Player = () => {
	const { songData } = usePlayer();
	if (!songData) return;
	return (
		<StyledPlayerContainer>
			<p>PLAYER</p>
		</StyledPlayerContainer>
	);
};

export default Player;
