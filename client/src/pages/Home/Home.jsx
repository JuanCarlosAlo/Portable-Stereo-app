import Banner from '../../components/banner/Banner';

import Section from '../../components/section/Section';

import { ARTICLE_TITLES } from '../../constants/articleTitles';
import { StyledHome } from './styles';
import HeaderNoLogin from '../../components/header-noLogin/HeaderNoLogin';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import HeaderLogin from '../../components/header-login/HeaderLogin';
import Loading from '../../components/loading/Loading';
import { useFetch } from '../../hooks/useFetch';
import { SONGS_URLS } from '../../constants/urls';

import { sortDataSliceTen } from '../../utils/sortData';

const Home = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);

	const { data, loading, error } = useFetch({ url: SONGS_URLS.EVERYTHING });
	if (loadingFirebase || loading || error) return <Loading />;

	const popularMusic = sortDataSliceTen(data.allSongs, 'replays');
	const latestrMusic = sortDataSliceTen(data.allSongs, 'date');

	return (
		<StyledHome>
			{currentUser ? <HeaderLogin userData={currentUser} /> : <HeaderNoLogin />}
			{!currentUser && <Banner />}
			<Section
				title={ARTICLE_TITLES.RECENTLY_UPLOADED}
				allData={latestrMusic}
			/>
			<Section title={ARTICLE_TITLES.POPULAR} allData={popularMusic} />
			<Section
				title={ARTICLE_TITLES.RECENTLY_PLAYED}
				allData={data.allUsers}
				url={'/show-all'}
			/>
		</StyledHome>
	);
};

export default Home;
