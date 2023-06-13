import Banner from '../../components/banner/Banner';

import Section from '../../components/section/Section';

import { ARTICLE_TITLES } from '../../constants/articleTitles';
import { StyledHome } from './styles';

import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/Auth.context';

import Loading from '../../components/loading/Loading';
import { useFetch } from '../../hooks/useFetch';
import { SONGS_URLS, USERS_URLS } from '../../constants/urls';

import { sortDataSliceTen } from '../../utils/sortData';

const Home = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	const { data, loading, error, setFetchInfo } = useFetch();
	useEffect(() => {
		if (!currentUser) {
			setFetchInfo({ url: SONGS_URLS.ALL });
		} else {
			setFetchInfo({ url: USERS_URLS.USER_DATA + currentUser.uid });
		}
	}, [currentUser]);

	if (loadingFirebase || loading || error) return <Loading />;

	const popularMusic = sortDataSliceTen(data.allSongs, 'replays');
	const latestrMusic = sortDataSliceTen(data.allSongs, 'date');
	const popularArtist = sortDataSliceTen(
		data.allUsers.filter(user => user.artist === true),
		'totalListeners'
	);

	return (
		<StyledHome>
			{!currentUser ? (
				<Banner />
			) : (
				<>
					<Section
						title={ARTICLE_TITLES.RECENTLY_PLAYED}
						allData={data.recentlyListenPromises}
						more={true}
					/>
					<Section
						title={ARTICLE_TITLES.FOLLOWNG_ARTIST}
						allData={data.followinArtistPromises}
						more={true}
					/>
				</>
			)}
			<Section
				title={ARTICLE_TITLES.RECENTLY_UPLOADED}
				allData={latestrMusic}
			/>
			<Section title={ARTICLE_TITLES.POPULAR} allData={popularArtist} />

			<Section title={ARTICLE_TITLES.TOP_MUSIC} allData={popularMusic} />
		</StyledHome>
	);
};

export default Home;
