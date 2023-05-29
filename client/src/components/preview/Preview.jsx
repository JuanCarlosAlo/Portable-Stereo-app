import { useContext, useRef } from 'react';
import { StyledImg, StyledPlay, StyledPreview, StyledTitle } from './styles';

import { SongContext } from '../../context/Song.context';

import { useNavigate } from 'react-router-dom';
import PlayButton from '../play-button/PlayButton';

const Preview = ({ type, img, title, songData }) => {
	const titleElement = useRef(null);
	// console.log(titleElement.current.scrollWidth);
	const { setSongData } = useContext(SongContext);
	const navigate = useNavigate();
	if (type === 'user') {
		return (
			<StyledPreview>
				<StyledImg
					onClick={() => navigate(`/artist/${songData._id}`)}
					src={img}
					alt='Preview image'
					type={type}
				/>
				<StyledTitle ref={titleElement}>{title}</StyledTitle>
			</StyledPreview>
		);
	} else {
		return (
			<StyledPreview>
				<StyledPlay>
					<PlayButton
						setSongData={setSongData}
						songData={songData}
						indexValue={0}
					/>
				</StyledPlay>

				<StyledImg
					onClick={() => navigate(`/song/${title}`, { state: songData })}
					src={img}
					alt='Preview image'
					type={type}
				/>
				<StyledTitle ref={titleElement}>{title}</StyledTitle>
			</StyledPreview>
		);
	}
};

export default Preview;
