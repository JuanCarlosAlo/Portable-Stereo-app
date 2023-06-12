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
	setPlayerState,
	playing,
	playerState,
	togglePlayPause
}) => {
	return (
		<StyledPlayerControls>
			<StyledControlsContainer>
				<StyledButtonsContainer>
					<LikeButton id={file[playerState.songIndex]._id} />
					<StyledButton
						onClick={() => {
							if (playerState.songIndex === 0) return;
							setPlayerState({
								...playerState,
								songIndex: playerState.songIndex - 1
							});
						}}
					>
						<img src='/images/previous-icon.svg' alt='pause-icon' />
					</StyledButton>
					<StyledButton
						onClick={() =>
							setPlayerState({ ...playerState, looping: !playerState.looping })
						}
					>
						<img
							src={
								playerState.looping
									? '/images/loop.svg'
									: '/images/not-loop.svg'
							}
							alt='pause-icon'
						/>
					</StyledButton>
					<StyledButtonPlay
						onClick={() => {
							togglePlayPause();
							setPlayerState({ ...playerState, autoplayValue: true });
						}}
					>
						<img
							src={playing ? '/images/pause-icon.svg' : '/images/play-icon.svg'}
							alt='play-icon'
						/>
					</StyledButtonPlay>
					<StyledButton
						onClick={() => {
							if (playerState.songIndex === file.length - 1) return;
							setPlayerState({
								...playerState,
								songIndex: playerState.songIndex + 1
							});
						}}
					>
						<img src='/images/next-icon.svg' alt='pause-icon' />
					</StyledButton>
				</StyledButtonsContainer>
				<StyledSoundbarContainer>
					<StyledButton
						onClick={() =>
							setPlayerState({ ...playerState, muted: !playerState.muted })
						}
					>
						<img
							src={
								playerState.muted
									? '/images/muted-icon.svg'
									: '/images/sound-icon.svg'
							}
							alt='play-icon'
						/>
					</StyledButton>
					<StyledSoundBar
						onChange={e =>
							setPlayerState({
								...playerState,
								volumeValue: e.target.value / 10
							})
						}
						type='range'
						id='points'
						name='points'
						min='0'
						max='10'
						defaultValue={{
							...playerState,
							volumeValue: playerState.volumeValue * 10
						}}
					/>
				</StyledSoundbarContainer>
			</StyledControlsContainer>
		</StyledPlayerControls>
	);
};

export default PlayerControls;
