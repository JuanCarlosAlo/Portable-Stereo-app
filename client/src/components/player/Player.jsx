import { useContext, useEffect, useState } from 'react';
import { StyledPlayerContainer, StyledUpperPlayer } from './styles';
import { SongContext } from '../../context/Song.context';
import { useAudioPlayer } from 'react-use-audio-player';
import PlayerControls from '../player-controls/PlayerControls';
import PlayerPlaybar from '../player-playbar/PlayerPlaybar';
import PlayerInfo from '../player-info/PlayerInfo';
const Player = () => {
	const { songData } = useContext(SongContext);
	if (!songData) return;
	const file = songData.song;
	const index = songData.index;

	const [songIndex, setSongIndex] = useState(index);
	const [looping, setLooping] = useState(true);
	const [volumeValue, setVolumeValue] = useState(0.5);
	const [autoplayValue, setAutoplayValue] = useState(true);
	const [muted, setMuted] = useState(false);

	const { togglePlayPause, ready, loading, playing, volume, mute } =
		useAudioPlayer({
			src: file[songIndex].soundFile,
			html5: true,
			format: ['mp3'],
			autoplay: autoplayValue,
			onend: () => {
				if (songIndex === file.length - 1) {
					if (looping) {
						setSongIndex(0);

						console.log('looping');
					} else {
						console.log('not looping');
						setSongIndex(0);
						setAutoplayValue(false);
					}
				} else {
					setSongIndex(songIndex + 1);
				}
			}
		});

	volume(volumeValue);

	useEffect(() => {
		mute(muted);
	}, [muted, mute]);

	useEffect(() => {
		// Cambiar la canción actual cuando cambia la prop index
		setSongIndex(index);
	}, [index]);

	useEffect(() => {
		// Reiniciar el reproductor si cambia la prop file
		setSongIndex(0);

		setAutoplayValue(true);
	}, [file]);

	if (!ready && !loading) return <div>No audio to play</div>;
	if (loading) return <div>Loading audio</div>;

	return (
		<StyledPlayerContainer>
			<StyledUpperPlayer>
				<PlayerInfo currentSong={file[songIndex]} />
				<PlayerControls
					file={file}
					looping={looping}
					muted={muted}
					playing={playing}
					setAutoplayValue={setAutoplayValue}
					setLooping={setLooping}
					setMuted={setMuted}
					setSongIndex={setSongIndex}
					setVolumeValue={setVolumeValue}
					songIndex={songIndex}
					togglePlayPause={togglePlayPause}
					volumeValue={volumeValue}
				/>
			</StyledUpperPlayer>

			<PlayerPlaybar />
		</StyledPlayerContainer>
	);
};

export default Player;
