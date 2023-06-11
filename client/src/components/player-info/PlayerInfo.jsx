import {
	StyledArtistInfoContainer,
	StyledArtistName,
	StyledCover,
	StyledSongInfo,
	StyledSongName
} from './styles';

const PlayerInfo = currentSong => {
	return (
		<StyledSongInfo>
			<StyledCover src={currentSong.currentSong.songCover} alt='' />
			<StyledArtistInfoContainer>
				<StyledSongName>{currentSong.currentSong.songTitle} </StyledSongName>
				<StyledArtistName>{currentSong.currentSong.artist} </StyledArtistName>
			</StyledArtistInfoContainer>
		</StyledSongInfo>
	);
};

export default PlayerInfo;
