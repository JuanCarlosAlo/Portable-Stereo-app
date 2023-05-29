import { useContext } from 'react';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { USERS_URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import ButtonIcon from '../button-icon/ButtonIcon';
import { StyledPlay } from './styles';
import { AuthContext } from '../../context/Auth.context';
import { SongContext } from '../../context/Song.context';

const PlayButton = ({ songData, indexValue }) => {
	console.log(songData);
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
const handleClick = (
	setSongData,
	songData,
	indexValue,
	setFetchInfo,
	currentUser
) => {
	setSongData({ song: songData.songItem, index: indexValue });
	if (currentUser) {
		setFetchInfo({
			url: USERS_URLS.RECENTLYPLAYED_UPDATE + currentUser.uid,
			options: {
				method: METHODS.PATCH,
				body: JSON.stringify({ id: songData._id }),
				headers: HEADERS
			}
		});
	}
};

export default PlayButton;
