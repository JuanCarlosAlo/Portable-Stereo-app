import { useLocation, useNavigate } from 'react-router-dom';
import { StyledSongHeader } from './styles';

const SongDetails = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	console.log(state);
	return (
		<div>
			<div>
				<button onClick={() => navigate('/')}>BACK</button>
			</div>
			<StyledSongHeader>
				<img src={state.cover} alt='cover' />
				<p>{state.title}</p>
				<p>{state.artist}</p>
			</StyledSongHeader>
			<div>
				{state.songItem.map(song => (
					<div key={song._id}>
						<p>{song.songTitle}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SongDetails;
