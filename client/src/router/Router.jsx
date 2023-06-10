import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/Login/Login';
import EditProfile from '../pages/Edit-Profile/EditProfile';
import ProtectedRoute from './ProtectedRoute';

import SongDetails from '../pages/SongDetails/SongDetails';
import Artist from '../pages/Artist/Artist';
import Mixtapes from '../pages/Mixtapes/Mixtapes';
import Search from '../pages/Search/Search';
import CreateMixtape from '../pages/Create Mixtape/CreateMixtape';
import MixtapeDetails from '../pages/MixtapeDetails/MixtapeDetails';

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
					<Route path='/artist/:id' element={<Artist />} />
					<Route path='/song/:title' element={<SongDetails />} />
					<Route path='/mixtape/:id' element={<MixtapeDetails />} />
					<Route
						path='/mixtapes/:id'
						element={
							<ProtectedRoute>
								<Mixtapes />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/create-mixtape'
						element={
							<ProtectedRoute>
								<CreateMixtape />
							</ProtectedRoute>
						}
					/>
					<Route path='/search/' element={<Search />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
