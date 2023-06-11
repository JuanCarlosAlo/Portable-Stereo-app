import { Outlet } from 'react-router-dom';
import Player from '../components/player/Player';
import Header from '../components/header/Header';
import { AudioPlayerProvider } from 'react-use-audio-player';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<AudioPlayerProvider>
				<Player />
			</AudioPlayerProvider>
		</>
	);
};

export default Layout;
