import { useState } from 'react';

export const usePlayer = () => {
	const [songData, setSongData] = useState(null);
	console.log(songData);
	return { songData, setSongData };
};
