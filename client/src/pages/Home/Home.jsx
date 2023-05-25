import Banner from '../../components/banner/Banner';

import Section from '../../components/section/Section';
import Player from '../../components/player/Player';
import { ARTICLE_TITLES } from '../../constants/articleTitles';
import { StyledHome } from './styles';
import HeaderNoLogin from '../../components/header-noLogin/HeaderNoLogin';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import HeaderLogin from '../../components/header-login/HeaderLogin';
import Loading from '../../components/loading/Loading';
import { useFetch } from '../../hooks/useFetch';
import { SONGS_URLS } from '../../constants/urls';
import SectionMixtapes from '../../components/section-mixtapes/SectionMixtapes';

const Home = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	console.log(currentUser);
	const { data, loading, error } = useFetch({ url: SONGS_URLS.EVERYTHING });
	if (loadingFirebase || loading || error) return <Loading />;

	const popularMusic = data.allSongs
		.sort((a, b) => {
			if (a.replays > b.replays) {
				return -1;
			}
			if (a.replays < b.replays) {
				return 1;
			}
			return 0;
		})
		.slice(0, 10);
	const latestrMusic = data.allSongs
		.sort((a, b) => {
			if (a.date > b.date) {
				return -1;
			}
			if (a.date < b.date) {
				return 1;
			}
			return 0;
		})
		.slice(0, 10);

	return (
		<StyledHome>
			{currentUser ? <HeaderLogin userData={currentUser} /> : <HeaderNoLogin />}
			{!currentUser ? (
				<Banner />
			) : (
				<SectionMixtapes
					title={ARTICLE_TITLES.MIXTAPES}
					allData={currentUser.mixtapes}
				/>
			)}
			<Section
				title={ARTICLE_TITLES.RECENTLY_UPLOADED}
				allData={latestrMusic}
			/>
			<Section title={ARTICLE_TITLES.POPULAR} allData={popularMusic} />
			<Section title={ARTICLE_TITLES.RECENTLY_PLAYED} allData={data.allUsers} />
			<Player />
		</StyledHome>
	);
};

export default Home;
