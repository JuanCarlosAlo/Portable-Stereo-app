import { useState } from 'react';

export const usePlayer = () => {
	const [songData, setSongData] = useState(null);

	return { songData, setSongData };
};
