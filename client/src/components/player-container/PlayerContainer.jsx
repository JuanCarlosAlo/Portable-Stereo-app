import { useContext, useEffect, useState } from 'react';
import { StyledPlayerContainer } from './styles';
import { SongContext } from '../../context/Song.context';

import Player from '../player/Player';

const PlayerContainer = () => {
	const { songData } = useContext(SongContext);
	const [localStorageLoaded, setLocalStorageLoaded] = useState(false);
	if (!songData) {
		// Renderizar un mensaje de carga o algo apropiado mientras se carga el songData
		return;
	}
	// Obtener los datos guardados en el localStorage al cargar la página
	useEffect(() => {
		const storedState = JSON.parse(localStorage.getItem('playerState'));
		if (storedState) {
			songData.setSongData({
				song: songData.song,
				index: storedState.songIndex
			});
			setLocalStorageLoaded(true);
		}
	}, []);

	// Guardar los datos en el localStorage al cambiar la canción
	useEffect(() => {
		if (localStorageLoaded) {
			localStorage.setItem(
				'playerState',
				JSON.stringify({
					songIndex: songData.index
				})
			);
		}
	}, [songData.index, localStorageLoaded]);

	console.log(songData);
	const file = songData.song;
	const index = songData.index;

	return (
		<StyledPlayerContainer>
			<Player file={file} index={index} />
		</StyledPlayerContainer>
	);
};

export default PlayerContainer;
