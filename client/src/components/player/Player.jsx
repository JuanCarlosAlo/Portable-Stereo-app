import { useAudioPlayer } from 'react-use-audio-player';
import PlayerControls from '../player-controls/PlayerControls';
import PlayerPlaybar from '../player-playbar/PlayerPlaybar';
import PlayerInfo from '../player-info/PlayerInfo';
import { StyledUpperPlayer } from './styles';
import { useEffect, useState } from 'react';

const Player = ({ file, index }) => {
	const [playerState, setPlayerState] = useState({
		songIndex: index,
		looping: true,
		volumeValue: 0.5,
		autoplayValue: true,
		muted: false
	});
	console.log(file);

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
