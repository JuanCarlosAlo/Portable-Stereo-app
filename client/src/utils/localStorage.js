export const getSongInitialIndex = index => {
	const initialValue = JSON.parse(localStorage.getItem('data'));
	console.log(initialValue);
	if (!initialValue) localStorage.setItem('data', JSON.stringify({ index }));
	return Number(initialValue.index) || index;
};

export const getSongInitialData = () => {
	const initialValue = JSON.parse(localStorage.getItem('data'));
	console.log(initialValue);
	if (!initialValue) localStorage.setItem('data', JSON.stringify({}));
	return initialValue.songData || null;
};
