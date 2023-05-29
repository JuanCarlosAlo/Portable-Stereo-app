import styled from 'styled-components';

import { COLORS } from '../../constants/colors';
import { HEADER_MEASUREMENTS } from '../../constants/measurements';

const StyledSongDetailsPage = styled.div`
	padding-top: ${HEADER_MEASUREMENTS.HEIGHT};
	padding-left: 1rem;
	padding-right: 1rem;
	margin-bottom: calc(100px + 2rem);
`;

const StyledsongHeaderImg = styled.img`
	height: 150px;
	width: 150px;
`;
const SongTitle = styled.p`
	font-family: Digital7;
	width: 80%;
	font-size: 2rem;
	margin: 0;
	color: ${COLORS.MAIN};
`;

const StyledSongInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	height: 100%;
`;
const SongArtist = styled.p`
	margin: 0;
	font-size: 0.8rem;
`;

const StyledSongHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	height: 150px;
	border: 2px solid ${COLORS.MAIN};
	border-radius: 0.5rem;
	overflow: hidden;
	padding-right: 1rem;
	margin-bottom: 2rem;
`;

const StyledPlayButtonContainer = styled.div`
	margin-bottom: 1rem;
`;

export {
	SongArtist,
	SongTitle,
	StyledPlayButtonContainer,
	StyledSongDetailsPage,
	StyledSongHeader,
	StyledSongInfo,
	StyledsongHeaderImg
};
