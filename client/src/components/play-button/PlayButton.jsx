import { useContext } from 'react';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { SONGS_URLS, USERS_URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import ButtonIcon from '../button-icon/ButtonIcon';
import { StyledPlay } from './styles';
import { AuthContext } from '../../context/Auth.context';
import { SongContext } from '../../context/Song.context';

const PlayButton = ({ songData, indexValue }) => {
	const { setSongData } = useContext(SongContext);
	const { setFetchInfo } = useFetch();
	const { currentUser, loadingFirebase } = useContext(AuthContext);

	if (loadingFirebase) return;
	return (
		<StyledPlay
			onClick={() =>
				handleClick(
					setSongData,
					songData,
					indexValue,
					setFetchInfo,
					currentUser
				)
			}
		>
			<ButtonIcon img={'/images/play-icon.svg'} />
		</StyledPlay>
	);
};
const handleClick = async (
	setSongData,
	songData,
	indexValue,
	setFetchInfo,
	currentUser
) => {
	if (songData) setSongData({ song: songData.songItem, index: indexValue });
	if (currentUser && songData._id) {
		await setFetchInfo({
			url: USERS_URLS.RECENTLYPLAYED_UPDATE + currentUser.uid,
			options: {
				method: METHODS.PATCH,
				body: JSON.stringify({ id: songData._id }),
				headers: HEADERS
			}
		});
	}

	await setFetchInfo({
		url: SONGS_URLS.REPLAYS_UPDATE,
		options: {
			method: METHODS.PATCH,
			body: JSON.stringify({ id: songData.songItem[indexValue]._id }),
			headers: HEADERS
		}
	});
};

export default PlayButton;
