import { useNavigate } from 'react-router-dom';
import PlayButton from '../play-button/PlayButton';
import {
	StyledImg,
	StyledItemInfo,
	StyledSeachItem,
	StyledTitle,
	StyledType
} from './styles';

const SearchItem = ({ songData, index, title, img, type, url }) => {
	const navigate = useNavigate();
	return (
		<StyledSeachItem>
			<StyledItemInfo
				onClick={() => handleClick(url, navigate, songData)}
				type={type}
			>
				<StyledImg src={img} alt='' type={type} />
				<div>
					<StyledTitle>{title}</StyledTitle>
					<StyledType>{type}</StyledType>
				</div>
			</StyledItemInfo>
			{songData && <PlayButton songData={songData} indexValue={index} />}
		</StyledSeachItem>
	);
};

const handleClick = (url, navigate, songData) => {
	if (!url) return;
	if (songData) {
		navigate(url, { state: songData });
	} else navigate(url);
};

export default SearchItem;
