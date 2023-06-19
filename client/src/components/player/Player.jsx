import { useAudioPlayer } from 'react-use-audio-player';
import PlayerControls from '../player-controls/PlayerControls';
import PlayerPlaybar from '../player-playbar/PlayerPlaybar';
import PlayerInfo from '../player-info/PlayerInfo';
import { StyledUpperPlayer } from './styles';
import { useEffect, useState } from 'react';

const Player = ({ file, index }) => {
	console.log(file, index);
	const storedState = JSON.parse(localStorage.getItem('playerState')) || {};
	const initialState = {
		songIndex: storedState.songIndex || index,
		looping: storedState.looping || true,
		volumeValue: storedState.volumeValue || 0.5,
		autoplayValue: storedState.autoplayValue || true,
		muted: storedState.muted || false
	};
	const [playerState, setPlayerState] = useState(initialState);

	useEffect(() => {
		localStorage.setItem('playerState', JSON.stringify(playerState));
	}, [playerState]);

	useEffect(() => {
		if (index !== initialState.songIndex) {
			setPlayerState(initialState);
		}
	}, [index, initialState.songIndex]);

	const { togglePlayPause, ready, loading, playing, volume, mute } =
		useAudioPlayer({
			src: file[playerState.songIndex].soundFile,
			html5: true,
			format: ['mp3'],
			autoplay: playerState.autoplayValue,
			onend: () => {
				if (playerState.songIndex === file.length - 1) {
					if (playerState.looping) {
						setPlayerState(prevState => ({
							...prevState,
							songIndex: 0
						}));
					} else {
						setPlayerState(prevState => ({
							...prevState,
							songIndex: 0,
							autoplayValue: false
						}));
					}
				} else {
					setPlayerState(prevState => ({
						...prevState,
						songIndex: prevState.songIndex + 1
					}));
				}
			}
		});

	volume(playerState.volumeValue);

	useEffect(() => {
		mute(playerState.muted);
	}, [playerState.muted, mute]);

	useEffect(() => {
		setPlayerState(prevState => ({
			...prevState,
			songIndex: index
		}));
	}, [index]);

	useEffect(() => {
		setPlayerState(prevState => ({
			...prevState,
			songIndex: 0,
			autoplayValue: true
		}));
	}, [file]);

	if (!ready && !loading) return <div>No audio to play</div>;
	if (loading) return <div>Loading audio</div>;

	return (
		<>
			{/* Contenido JSX del componente */}
			<StyledUpperPlayer>
				<PlayerInfo currentSong={file[playerState.songIndex]} />
				<PlayerControls
					file={file}
					setPlayerState={setPlayerState}
					playing={playing}
					playerState={playerState}
					togglePlayPause={togglePlayPause}
				/>
			</StyledUpperPlayer>

			<PlayerPlaybar />
		</>
	);
};

export default Player;
