import Banner from '../../components/banner/Banner';

import Section from '../../components/section/Section';

import { ARTICLE_TITLES } from '../../constants/articleTitles';
import { StyledHome } from './styles';
import HeaderNoLogin from '../../components/header-noLogin/HeaderNoLogin';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/Auth.context';
import HeaderLogin from '../../components/header-login/HeaderLogin';
import Loading from '../../components/loading/Loading';
import { useFetch } from '../../hooks/useFetch';
import { USERS_URLS } from '../../constants/urls';

import { sortDataSliceTen } from '../../utils/sortData';

const Home = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	const { data, loading, error, setFetchInfo } = useFetch();
	useEffect(() => {
		if (!currentUser) return;

		setFetchInfo({ url: USERS_URLS.USER_DATA + currentUser.uid });
	}, [currentUser]);

	if (loadingFirebase || loading || error) return <Loading />;
	console.log(data);
	const popularMusic = sortDataSliceTen(data.allSongs, 'replays');
	const latestrMusic = sortDataSliceTen(data.allSongs, 'date');
	const allArtist = sortDataSliceTen(
		data.allUsers.filter(user => user.artist === true),
		'likes.othersLikes'
	);

	return (
		<StyledHome>
			{currentUser ? <HeaderLogin userData={currentUser} /> : <HeaderNoLogin />}
			{!currentUser ? (
				<Banner />
			) : (
				<>
					<Section
						title={ARTICLE_TITLES.RECENTLY_PLAYED}
						allData={data.recentlyListenPromises}
					/>
					<Section title={ARTICLE_TITLES.LIKED} allData={data.likedPromises} />
				</>
			)}
			<Section
				title={ARTICLE_TITLES.RECENTLY_UPLOADED}
				allData={latestrMusic}
			/>
			<Section title={ARTICLE_TITLES.POPULAR} allData={allArtist} />

			<Section title={ARTICLE_TITLES.TOP_MUSIC} allData={popularMusic} />
		</StyledHome>
	);
};

export default Home;
