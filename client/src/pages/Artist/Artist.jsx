import { useContext, useState } from 'react';
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
	StyledBio,
	StyledPopularContainer,
	StyledSectionTitle,
	StyledShowMoreButton,
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
	const [showMore, setShowMore] = useState(false);
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
				<Section
					allData={featured}
					title={ARTICLE_TITLES.FEATURED}
					more={true}
				/>
				<StyledPopularContainer showMore={showMore}>
					<StyledTitleContainer>
						<StyledSectionTitle>{ARTICLE_TITLES.POPULAR}</StyledSectionTitle>
						<StyledShowMoreButton onClick={() => setShowMore(!showMore)}>
							{showMore ? '- Show less' : '+ Show more'}
						</StyledShowMoreButton>
					</StyledTitleContainer>
					<div>
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
					</div>
				</StyledPopularContainer>
				<Section
					allData={discography}
					title={ARTICLE_TITLES.DISCOGRAPHY}
					more={true}
				/>
			</div>
		</StyledArtistPage>
	);
};

export default Artist;
