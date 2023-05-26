import { useState } from 'react';
import { SongContext } from '../context/Song.context';

export const SongProvider = ({ children }) => {
	const [songData, setSongData] = useState(null);
	console.log(songData);

	return (
		<SongContext.Provider value={{ songData, setSongData }}>
			{children}
		</SongContext.Provider>
	);
};
