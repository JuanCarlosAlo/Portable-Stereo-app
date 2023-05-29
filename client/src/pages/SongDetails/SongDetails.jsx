import { Navigate, useLocation } from 'react-router-dom';
import {
	SongArtist,
	SongTitle,
	StyledPlayButtonContainer,
	StyledSongContainer,
	StyledSongDetailsPage,
	StyledSongHeader,
	StyledSongInfo,
	StyledSongPlayContainer,
	StyledsongHeaderImg
} from './styles';
import HeaderBack from '../../components/header-back/HeaderBack';
import { useContext } from 'react';
import { SongContext } from '../../context/Song.context';
import PlayButton from '../../components/play-button/PlayButton';
import { formatCompactNumber } from '../../utils/compactNumbers';

const SongDetails = () => {
	const { setSongData } = useContext(SongContext);
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
					<PlayButton
						setSongData={setSongData}
						songData={state}
						indexValue={0}
					/>
				</StyledPlayButtonContainer>
			</StyledSongHeader>
			<div>
				{state.songItem.map((song, index) => (
					<StyledSongContainer key={song._id}>
						<p>{song.songTitle}</p>
						<StyledSongPlayContainer>
							<p>{formatCompactNumber(song.replays)}</p>
							<PlayButton
								setSongData={setSongData}
								songData={state}
								indexValue={index}
							/>
						</StyledSongPlayContainer>
					</StyledSongContainer>
				))}
			</div>
		</StyledSongDetailsPage>
	);
};

export default SongDetails;
