export const sortDataSliceTen = (data, stat) => {
	return data
		.sort((a, b) => {
			if (a[stat] > b[stat]) {
				return -1;
			}
			if (a[stat] < b[stat]) {
				return 1;
			}

			return 0;
		})
		.slice(0, 10);
};
