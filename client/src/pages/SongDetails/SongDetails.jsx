import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import {
	SongArtist,
	SongDate,
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
	const navigate = useNavigate();
	if (!state) return <Navigate to={'/'} />;
	const songDate = new Date(state.date).toLocaleDateString();
	console.log(state);
	return (
		<StyledSongDetailsPage>
			<HeaderBack url={'/'} text={'BACK'} />
			<StyledSongHeader>
				<StyledsongHeaderImg src={state.cover} alt='cover' />
				<StyledSongInfo>
					<SongTitle>{state.title}</SongTitle>
					<SongArtist onClick={() => navigate('/artist/' + state.artistId)}>
						{state.artist}
					</SongArtist>
					<SongDate>{songDate}</SongDate>
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
						id={song._id}
					/>
				))}
			</div>
		</StyledSongDetailsPage>
	);
};

export default SongDetails;
