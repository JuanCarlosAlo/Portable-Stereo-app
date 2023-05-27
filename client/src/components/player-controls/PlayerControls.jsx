import { useEffect, useState } from 'react';
import { useAudioPlayer, useAudioPosition } from 'react-use-audio-player';
import {
	StyledArtistInfoContainer,
	StyledArtistName,
	StyledButton,
	StyledButtonLike,
	StyledButtonPlay,
	StyledButtonsContainer,
	StyledControlsContainer,
	StyledCover,
	StyledCurrentTime,
	StyledDurationContainer,
	StyledPlayerButtons,
	StyledSongInfo,
	StyledSongName,
	StyledSoundBar,
	StyledSoundbarContainer,
	StyledTime
} from './styles';

const PlayerControls = ({ file }) => {
	const [songIndex, setSongIndex] = useState(0);
	const currentSong = file[songIndex];
	const { togglePlayPause, ready, loading, playing, volume, mute } =
		useAudioPlayer({
			src: currentSong.soundFile,
			html5: true,
			format: ['mp3'],
			autoplay: true,
			onend: () => {
				if (songIndex === file.length - 1) return;
				setSongIndex(songIndex + 1);
			}
		});
	const { duration, position } = useAudioPosition();
	const [muted, setMuted] = useState(false);
	const elapsed = typeof position === 'number' ? position : 0;
	useEffect(() => {
		mute(muted);
	}, [muted, mute]);

	if (!ready && !loading) return <div>No audio to play</div>;
	if (loading) return <div>Loading audio</div>;

	return (
		<StyledPlayerButtons>
			<StyledSongInfo>
				<StyledCover src={file[songIndex].songCover} alt='' />
				<StyledArtistInfoContainer>
					<StyledSongName>{currentSong.songTitle} </StyledSongName>
					<StyledArtistName>{currentSong.artist} </StyledArtistName>
				</StyledArtistInfoContainer>
			</StyledSongInfo>
			<StyledDurationContainer>
				<StyledCurrentTime>{formatTime(elapsed)}</StyledCurrentTime>
				<StyledTime>{formatTime(duration)}</StyledTime>
			</StyledDurationContainer>
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
					<StyledButtonPlay onClick={togglePlayPause}>
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
						onChange={e => volume(e.target.value / 10)}
						type='range'
						id='points'
						name='points'
						min='0'
						max='10'
					/>
				</StyledSoundbarContainer>
			</StyledControlsContainer>
		</StyledPlayerButtons>
	);
};
const formatTime = seconds => {
	const floored = Math.floor(seconds);
	let from = 14;
	let length = 5;
	if (floored >= 3600) {
		from = 11;
		length = 8;
	}
	return new Date(floored * 1000).toISOString().substr(from, length);
};

export default PlayerControls;
