import { Outlet } from 'react-router-dom';
import Player from '../components/player/Player';

const Layout = () => {
	return (
		<>
			<Outlet />
			<Player />
		</>
	);
};

export default Layout;
