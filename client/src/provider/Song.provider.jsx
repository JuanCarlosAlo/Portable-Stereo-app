import { useEffect, useState } from 'react';
import { SongContext } from '../context/Song.context';
import { getSongInitialData } from '../utils/localStorage';

export const SongProvider = ({ children }) => {
	const [songData, setSongData] = useState(null);
	// useEffect(() => {
	// 	localStorage.setItem('data', JSON.stringify({ songData }));
	// }, [songData]);

	return (
		<SongContext.Provider value={{ songData, setSongData }}>
			{children}
		</SongContext.Provider>
	);
};
