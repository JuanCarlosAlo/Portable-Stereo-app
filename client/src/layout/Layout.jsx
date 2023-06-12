import { Outlet } from 'react-router-dom';

import Header from '../components/header/Header';
import { AudioPlayerProvider } from 'react-use-audio-player';
import PlayerContainer from '../components/player-container/PlayerContainer';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<AudioPlayerProvider>
				<PlayerContainer />
			</AudioPlayerProvider>
		</>
	);
};

export default Layout;
