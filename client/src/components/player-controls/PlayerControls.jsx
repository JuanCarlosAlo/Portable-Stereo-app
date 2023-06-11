import {
	StyledButton,
	StyledButtonPlay,
	StyledButtonsContainer,
	StyledControlsContainer,
	StyledPlayerControls,
	StyledSoundBar,
	StyledSoundbarContainer
} from './styles';
import LikeButton from '../like-button/LikeButton';

const PlayerControls = ({
	file,
	setSongIndex,
	setLooping,
	songIndex,
	looping,
	togglePlayPause,
	setAutoplayValue,
	playing,
	setMuted,
	muted,
	setVolumeValue,
	volumeValue
}) => {
	return (
		<StyledPlayerControls>
			<StyledControlsContainer>
				<StyledButtonsContainer>
					<LikeButton id={file[songIndex]._id} />
					<StyledButton
						onClick={() => {
							if (songIndex === 0) return;
							setSongIndex(songIndex - 1);
						}}
					>
						<img src='/images/previous-icon.svg' alt='pause-icon' />
					</StyledButton>
					<StyledButton onClick={() => setLooping(!looping)}>
						<img
							src={looping ? '/images/loop.svg' : '/images/not-loop.svg'}
							alt='pause-icon'
						/>
					</StyledButton>
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
							if (songIndex === file.length - 1) return;
							setSongIndex(songIndex + 1);
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
		</StyledPlayerControls>
	);
};

export default PlayerControls;
