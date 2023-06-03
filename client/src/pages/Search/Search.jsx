import { useFetch } from '../../hooks/useFetch';
import {
	StyledInputContainer,
	StyledSearchBar,
	StyledSearchPage
} from './styles';
import { SONGS_URLS } from '../../constants/urls';

import SearchItem from '../../components/search-item/SearchItem';

const Search = () => {
	const { data, setFetchInfo } = useFetch();
	return (
		<StyledSearchPage>
			<StyledInputContainer>
				<StyledSearchBar
					onChange={e => handleChange(e, setFetchInfo)}
					type='text'
					name='search'
					placeholder='Search Artist, songs, albums'
				/>
			</StyledInputContainer>
			{data && (
				<>
					{data.songItem && (
						<>
							{data.songItem.map((element, index) => {
								return (
									<SearchItem
										key={element._id}
										songData={data}
										title={element.songTitle}
										img={element.songCover}
										type={'Song'}
										index={index}
									/>
								);
							})}
						</>
					)}
					{data.searchAlbum && (
						<>
							{data.searchAlbum.map(element => {
								return (
									<SearchItem
										key={element._id}
										songData={element}
										title={element.title}
										img={element.cover}
										type={'Album'}
										index={0}
										url={`/song/${element.title}`}
									/>
								);
							})}
						</>
					)}
					{data.searchArtist && (
						<>
							{data.searchArtist.map(element => {
								return (
									<SearchItem
										key={element._id}
										title={element.userName}
										img={element.profileImg}
										type={'Artist'}
										url={`/artist/${element._id}`}
									/>
								);
							})}
						</>
					)}
				</>
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
