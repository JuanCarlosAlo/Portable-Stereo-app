import { useEffect, useState } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';
import {
	StyledArtistInfoContainer,
	StyledArtistName,
	StyledButton,
	StyledButtonLike,
	StyledButtonPlay,
	StyledButtonsContainer,
	StyledControlsContainer,
	StyledCover,
	StyledPlayerButtons,
	StyledSongInfo,
	StyledSongName,
	StyledSoundBar,
	StyledSoundbarContainer
} from './styles';

const PlayerControls = ({ file, index }) => {
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
		<StyledPlayerButtons>
			<StyledSongInfo>
				<StyledCover src={file[songIndex].songCover} alt='' />
				<StyledArtistInfoContainer>
					<StyledSongName>{file[songIndex].songTitle} </StyledSongName>
					<StyledArtistName>{file[songIndex].artist} </StyledArtistName>
				</StyledArtistInfoContainer>
			</StyledSongInfo>

			<StyledControlsContainer>
				<StyledButtonsContainer>
					<StyledButtonLike>
						<img src='/images/heart-dislike.svg' alt='pause-icon' />
					</StyledButtonLike>
					<StyledButton
						onClick={() => {
							if (songIndex === file.length - 1) return;
							setSongIndex(songIndex + 1);
						}}
					>
						<img src='/images/previous-icon.svg' alt='pause-icon' />
					</StyledButton>
					<StyledButton onClick={() => setLooping(!looping)}>Loop</StyledButton>
					<StyledButtonPlay
						onClick={() => {
							togglePlayPause();
							setAutoplayValue(true);
						}}
					>
						<img
							src={playing ? '/images/pause-icon.svg' : '/images/play-icon.svg'}
							alt='play-icon'
						/>
					</StyledButtonPlay>
					<StyledButton
						onClick={() => {
							if (songIndex === 0) return;
							setSongIndex(songIndex - 1);
						}}
					>
						<img src='/images/next-icon.svg' alt='pause-icon' />
					</StyledButton>
				</StyledButtonsContainer>
				<StyledSoundbarContainer>
					<StyledButton onClick={() => setMuted(!muted)}>
						<img
							src={muted ? '/images/muted-icon.svg' : '/images/sound-icon.svg'}
							alt='play-icon'
						/>
					</StyledButton>
					<StyledSoundBar
						onChange={e => setVolumeValue(e.target.value / 10)}
						type='range'
						id='points'
						name='points'
						min='0'
						max='10'
						defaultValue={volumeValue * 10}
					/>
				</StyledSoundbarContainer>
			</StyledControlsContainer>
		</StyledPlayerButtons>
	);
};

export default PlayerControls;
