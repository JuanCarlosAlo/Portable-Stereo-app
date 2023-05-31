import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { Navigate, useParams } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import { useFetch } from '../../hooks/useFetch';
import { SONGS_URLS } from '../../constants/urls';

import {
	StyledArtistHeader,
	StyledArtistPage,
	StyledArtistProfileImg
} from './styles';
import Section from '../../components/section/Section';
import { ARTICLE_TITLES } from '../../constants/articleTitles';
import { sortDataSliceTen } from '../../utils/sortData';

import SongContainer from '../../components/song-container/SongContainer';
import { formatCompactNumber } from '../../utils/compactNumbers';

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
				<div>
					<p>{data.currentArtist.userName}</p>
					<div>
						<p>{data.currentArtist.bio}</p>
						<div>
							<p>Followers: {data.currentArtist.follows.othersFollows}</p>
							<p>Listeners: {data.currentArtist.totalListeners}</p>
						</div>
					</div>
				</div>
				<Section allData={featured} title={'FEATURED'} />
				<div>
					<p>{ARTICLE_TITLES.POPULAR}</p>
					{popularSongs.songItem.map((song, index) => {
						return (
							<SongContainer
								key={song._id}
								songData={song}
								title={song.songTitle}
								replays={formatCompactNumber(song.replays)}
								index={index}
							/>
						);
					})}
				</div>
				<Section allData={discography} title={ARTICLE_TITLES.DISCOGRAPHY} />
			</div>
		</StyledArtistPage>
	);
};

export default Artist;
