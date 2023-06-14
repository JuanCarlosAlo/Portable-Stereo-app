import { Outlet } from 'react-router-dom';

import Header from '../components/header/Header';
import { AudioPlayerProvider } from 'react-use-audio-player';
import PlayerContainer from '../components/player-container/PlayerContainer';
import Footer from '../components/footer/Footer';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<AudioPlayerProvider>
				<PlayerContainer />
			</AudioPlayerProvider>
		</>
	);
};

export default Layout;
