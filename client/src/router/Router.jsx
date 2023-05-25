import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/Login/Login';
import EditProfile from '../pages/Edit-Profile/EditProfile';
import ProtectedRoute from './ProtectedRoute';
import UserPage from '../pages/SongDetails/SongDetails';

const Router = () => {
	return (
		<Routes>
			<Route>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/register' element={<Register />} />
					<Route
						path='/profile'
						element={
							<ProtectedRoute>
								<Profile />
							</ProtectedRoute>
						}
					/>
					<Route path='/login' element={<Login />} />
					<Route
						path='/profile-edit'
						element={
							<ProtectedRoute>
								<EditProfile />
							</ProtectedRoute>
						}
					/>
					<Route path='/user/:userName' element={<UserPage />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
