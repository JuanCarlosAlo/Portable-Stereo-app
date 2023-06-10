import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { Navigate, useParams } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import { useFetch } from '../../hooks/useFetch';
import { SONGS_URLS } from '../../constants/urls';

import {
	StyledArtistContainer,
	StyledArtistHeader,
	StyledArtistInfo,
	StyledArtistName,
	StyledArtistPage,
	StyledArtistProfileImg,
	StyledBar,
	StyledBio,
	StyledPopularContainer,
	StyledTitleContainer
} from './styles';
import Section from '../../components/section/Section';
import { ARTICLE_TITLES } from '../../constants/articleTitles';
import { sortDataSliceTen } from '../../utils/sortData';

import SongContainer from '../../components/song-container/SongContainer';
import { formatCompactNumber } from '../../utils/compactNumbers';
import FollowButton from '../../components/follow-button/FollowButton';

const Artist = () => {
	const { id } = useParams();

	const { currentUser, loadingFirebase } = useContext(AuthContext);

	const { data, loading, error } = useFetch({ url: SONGS_URLS.ARTIST + id });
	if (loadingFirebase || loading || error) return <Loading />;
	if (currentUser && currentUser.uid === id) return <Navigate to={'/'} />;

	const allArtistSongs = data.allSongs.map(song =>
		song.songItem.map(songItem => {
			return songItem;
		})
	);
	const popularSongs = {
		songItem: sortDataSliceTen(allArtistSongs[0], 'replays')
	};
	const discography = sortDataSliceTen(data.allSongs, 'date');
	const featured = sortDataSliceTen(data.allSongs, 'likes');

	return (
		<StyledArtistPage>
			<div>
				<StyledArtistHeader bgimg={data.currentArtist.headerImg}>
					<StyledArtistProfileImg src={data.currentArtist.profileImg} />
				</StyledArtistHeader>
				<StyledArtistInfo>
					<StyledArtistName>{data.currentArtist.userName}</StyledArtistName>
					<StyledArtistContainer>
						<StyledBio>{data.currentArtist.bio}</StyledBio>
						<div>
							<p>
								Followers:{' '}
								{formatCompactNumber(data.currentArtist.follows.othersFollows)}
							</p>
							<p>
								Listeners:{' '}
								{formatCompactNumber(data.currentArtist.totalListeners)}
							</p>
							<FollowButton id={data.currentArtist._id} />
						</div>
					</StyledArtistContainer>
				</StyledArtistInfo>
				<Section allData={featured} title={'FEATURED'} />
				<div>
					<StyledTitleContainer>
						<p>{ARTICLE_TITLES.POPULAR}</p>
						<StyledBar></StyledBar>
					</StyledTitleContainer>
					<StyledPopularContainer>
						{popularSongs.songItem.map((song, index) => {
							return (
								<SongContainer
									key={song._id}
									songData={popularSongs}
									title={song.songTitle}
									replays={formatCompactNumber(song.replays)}
									index={index}
									id={song._id}
								/>
							);
						})}
					</StyledPopularContainer>
				</div>
				<Section allData={discography} title={ARTICLE_TITLES.DISCOGRAPHY} />
			</div>
		</StyledArtistPage>
	);
};

export default Artist;
