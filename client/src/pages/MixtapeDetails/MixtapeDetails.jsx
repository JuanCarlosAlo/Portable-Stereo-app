import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import {
	SongArtist,
	SongTitle,
	StyledEditButton,
	StyledEditButtonsContainer,
	StyledMixtapeSong,
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
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import DeleteModal from '../../components/delete-modal/DeleteModal';
import Modal from '../../components/modal/Modal';
import EditMixtapeModal from '../../components/edit-mixtape-modal/EditMixtapeModal';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import { USERS_URLS } from '../../constants/urls';

const MixtapeDetails = () => {
	const { currentUser } = useContext(AuthContext);
	const { state } = useLocation();
	const { setFetchInfo } = useFetch();
	const navigate = useNavigate();
	const [content, setContent] = useState(null);
	if (!currentUser) return;
	if (!state) return <Navigate to={'/'} />;
	const songDate = new Date(state.date).toLocaleDateString();
	const UserMixtape = currentUser._id === state.artistId;

	return (
		<>
			<StyledSongDetailsPage>
				<HeaderBack url={`/mixtapes/${currentUser._id}`} text={'BACK'} />
				<StyledSongHeader>
					<StyledsongHeaderImg src={state.cover} alt='cover' />
					<StyledSongInfo>
						<SongTitle>{state.title}</SongTitle>
						<SongArtist onClick={() => navigate('/artist/' + state.artistId)}>
							{state.artist}
						</SongArtist>
						<SongArtist>{songDate}</SongArtist>
					</StyledSongInfo>
					<StyledPlayButtonContainer>
						<PlayButton songData={state} indexValue={0} />
					</StyledPlayButtonContainer>
				</StyledSongHeader>
				{UserMixtape && (
					<>
						<StyledEditButtonsContainer>
							<StyledEditButton
								onClick={() =>
									setContent(
										<DeleteModal
											setContent={setContent}
											id={state._id}
											currentUser={currentUser}
											title={state.title}
											setFetchInfo={setFetchInfo}
											url={'/mixtapes/' + currentUser._id}
										/>
									)
								}
							>
								- Delete
							</StyledEditButton>

							<StyledEditButton
								onClick={() =>
									setContent(
										<EditMixtapeModal
											setContent={setContent}
											setFetchInfo={setFetchInfo}
											currentUser={currentUser}
											id={state._id}
											mixtapeData={state}
										/>
									)
								}
							>
								Edit
							</StyledEditButton>
							<StyledEditButton onClick={() => navigate('/search')}>
								+ Add song
							</StyledEditButton>
						</StyledEditButtonsContainer>
					</>
				)}
				<div>
					{state.songItem.map((song, index) => (
						<StyledMixtapeSong key={song._id}>
							{UserMixtape && (
								<p
									onClick={() =>
										handleClick(
											setFetchInfo,
											song._id,
											state._id,
											currentUser._id
										)
									}
								>
									-
								</p>
							)}
							<SongContainer
								index={index}
								title={song.songTitle}
								replays={formatCompactNumber(song.replays)}
								songData={state}
								id={song._id}
							/>
						</StyledMixtapeSong>
					))}
				</div>
			</StyledSongDetailsPage>
			<Modal>{content}</Modal>
		</>
	);
};

const handleClick = async (setFetchInfo, songId, mixtapeId, currentUserId) => {
	console.log(mixtapeId);
	await setFetchInfo({
		url: USERS_URLS.DELETE_SONG_FROM_MIXTAPE + currentUserId,
		options: {
			method: METHODS.DELETE,
			body: JSON.stringify({ songId, mixtapeId }),
			headers: HEADERS
		},
		navigateTo: '/mixtapes/' + currentUserId
	});
};

export default MixtapeDetails;
