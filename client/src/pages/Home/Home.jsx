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
	const { currentUser } = useContext(AuthContext);

	return (
		<StyledHome>
			{currentUser ? <HeaderLogin userData={currentUser} /> : <HeaderNoLogin />}
			{!currentUser ? <Banner /> : <Section title={ARTICLE_TITLES.MIXTAPES} />}
			<Section title={ARTICLE_TITLES.RECENTLY_UPLOAD} />
			<Section title={ARTICLE_TITLES.TOP_MUSIC} />
			<Player />
		</StyledHome>
	);
};

export default Home;
