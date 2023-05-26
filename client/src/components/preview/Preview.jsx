import { useContext, useRef } from 'react';
import { StyledImg, StyledMixtape, StyledPreview, StyledTitle } from './styles';

import { SongContext } from '../../context/Song.context';

const Preview = ({ type, img, title, mixtape, songData }) => {
	const titleElement = useRef(null);
	// console.log(titleElement.current.scrollWidth);
	const { setSongData } = useContext(SongContext);
	if (!mixtape) {
		return (
			<StyledPreview onClick={() => setSongData(songData)}>
				<StyledImg src={img} alt='Preview image' type={type} />
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
