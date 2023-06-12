export const getSongInitialValue = index => {
	const initialValue = JSON.parse(localStorage.getItem('data'));
	if (!initialValue) localStorage.setItem('data', JSON.stringify({ index }));
	return Number(initialValue.index) || index;
};
