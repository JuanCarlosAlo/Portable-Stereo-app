import { useContext, useRef } from 'react';
import {
	StyledImg,
	StyledMixtape,
	StyledPlay,
	StyledPreview,
	StyledTitle
} from './styles';

import { SongContext } from '../../context/Song.context';
import ButtonIcon from '../button-icon/ButtonIcon';
import { useNavigate } from 'react-router-dom';

const Preview = ({ type, img, title, mixtape, songData }) => {
	const titleElement = useRef(null);
	// console.log(titleElement.current.scrollWidth);
	const { setSongData } = useContext(SongContext);
	const navigate = useNavigate();
	if (!mixtape) {
		return (
			<StyledPreview>
				<StyledPlay onClick={() => setSongData(songData.songItem)}>
					<ButtonIcon img={'/images/play-icon.svg'} />
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
	} else {
		return (
			<StyledMixtape>
				<StyledImg src={img} type={type} />
				<p>{title}</p>
			</StyledMixtape>
		);
	}
};

export default Preview;
