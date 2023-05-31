import { v4 } from 'uuid';

import { useFetch } from '../../hooks/useFetch';
import { StyledSearchPage } from './styles';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { SONGS_URLS } from '../../constants/urls';

const Search = () => {
	const { data, loading, error, setFetchInfo } = useFetch();

	return (
		<StyledSearchPage>
			Search
			<input
				onChange={e => handleChange(e, setFetchInfo)}
				type='text'
				name='search'
			/>
			{data && (
				<div>
					{data.map(element => (
						<p key={v4()}>{console.log(element)}</p>
					))}
				</div>
			)}
		</StyledSearchPage>
	);
};
const handleChange = async (e, setFetchInfo) => {
	const keyWord = e.target.value;
	if (keyWord.length < 3) return;
	await setFetchInfo({
		url: SONGS_URLS.SEARCH + keyWord
	});
};

export default Search;
