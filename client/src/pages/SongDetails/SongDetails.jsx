import { Navigate, useLocation } from 'react-router-dom';
import {
	SongArtist,
	SongTitle,
	StyledPlayButtonContainer,
	StyledSongDetailsPage,
	StyledSongHeader,
	StyledSongInfo,
	StyledsongHeaderImg
} from './styles';
import HeaderBack from '../../components/header-back/HeaderBack';

import PlayButton from '../../components/play-button/PlayButton';

import SongContainer from '../../components/song-container/SongContainer';
import { formatCompactNumber } from '../../utils/compactNumbers';

const SongDetails = () => {
	const { state } = useLocation();

	if (!state) return <Navigate to={'/'} />;
	const songDate = new Date(state.date).toLocaleDateString();

	return (
		<StyledSongDetailsPage>
			<HeaderBack url={'/'} text={'BACK'} />
			<StyledSongHeader>
				<StyledsongHeaderImg src={state.cover} alt='cover' />
				<StyledSongInfo>
					<SongTitle>{state.title}</SongTitle>
					<SongArtist>{state.artist}</SongArtist>
					<SongArtist>{songDate}</SongArtist>
				</StyledSongInfo>
				<StyledPlayButtonContainer>
					<PlayButton songData={state} indexValue={0} />
				</StyledPlayButtonContainer>
			</StyledSongHeader>
			<div>
				{state.songItem.map((song, index) => (
					<SongContainer
						key={song._id}
						index={index}
						title={song.songTitle}
						replays={formatCompactNumber(song.replays)}
						songData={state}
					/>
				))}
			</div>
		</StyledSongDetailsPage>
	);
};

export default SongDetails;
