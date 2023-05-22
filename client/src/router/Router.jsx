import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/Login/Login';

const Router = () => {
	return (
		<Routes>
			<Route>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/register' element={<Register />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/login' element={<Login />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
