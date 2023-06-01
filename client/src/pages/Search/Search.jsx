import { useFetch } from '../../hooks/useFetch';
import { StyledSearchPage } from './styles';

import { SONGS_URLS } from '../../constants/urls';
import SongContainer from '../../components/song-container/SongContainer';
import { formatCompactNumber } from '../../utils/compactNumbers';

import { useNavigate } from 'react-router-dom';
import PlayButton from '../../components/play-button/PlayButton';

const Search = () => {
	const { data, setFetchInfo } = useFetch();
	const navigate = useNavigate();
	console.log(data);
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
					{data.songItem && (
						<>
							{data.songItem.map((element, index) => {
								return (
									<SongContainer
										key={element._id}
										songData={data}
										title={element.songTitle}
										replays={formatCompactNumber(element.replays)}
										index={index}
									/>
								);
							})}
						</>
					)}
					{data.searchAlbum && (
						<>
							{data.searchAlbum.map((element, index) => {
								console.log(element);
								return (
									<div key={element._id}>
										<p
											onClick={() =>
												navigate(`/song/${element.title}`, {
													state: element
												})
											}
										>
											{element.title}
										</p>
										<PlayButton songData={element} indexValue={index} />
									</div>
								);
							})}
						</>
					)}
					{data.searchArtist && (
						<>
							{data.searchArtist.map(element => {
								return (
									<div
										onClick={() => navigate(`/artist/${element._id}`)}
										key={element.uid}
									>
										<p>{element.userName}</p>
									</div>
								);
							})}
						</>
					)}
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
