import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import { AuthProvider } from './provider/Auth.provider';
import { SongProvider } from './provider/Song.provider';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<AuthProvider>
				<SongProvider>
					<Router />
				</SongProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
