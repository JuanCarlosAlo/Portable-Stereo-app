import { Outlet } from 'react-router-dom';
import Player from '../components/player/Player';
import Header from '../components/header/Header';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Player />
		</>
	);
};

export default Layout;
