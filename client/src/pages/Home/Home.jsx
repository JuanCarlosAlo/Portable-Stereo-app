import Banner from '../../components/banner/Banner';

import Section from '../../components/section/Section';
import Player from '../../components/player/Player';
import { ARTICLE_TITLES } from '../../constants/articleTitles';
import { StyledHome } from './styles';
import HeaderNoLogin from '../../components/header-noLogin/HeaderNoLogin';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import HeaderLogin from '../../components/header-login/HeaderLogin';

const Home = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	if (loadingFirebase) return <h2>...Loading</h2>;

	return (
		<>
			{currentUser ? (
				<StyledHome>
					<HeaderLogin />
					<Banner />
					<Section title={ARTICLE_TITLES.RECENTLY_UPLOAD} />
					<Player />
				</StyledHome>
			) : (
				<StyledHome>
					<HeaderNoLogin />
					<Banner />
					<Section title={ARTICLE_TITLES.RECENTLY_UPLOAD} />
					<Player />
				</StyledHome>
			)}
		</>
	);
};

export default Home;
