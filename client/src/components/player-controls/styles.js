import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledPlayerButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
`;
const StyledSoundbarContainer = styled.div`
	display: flex;
	gap: 1rem;

	justify-content: flex-end;
`;
const StyledSoundBar = styled.input`
	width: 70px;
`;
const StyledCover = styled.img`
	height: 50px;
	width: 50px;
`;
const StyledSongInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	width: 100%;
`;
const StyledArtistName = styled.p`
	font-size: 0.6rem;
	margin: 0;
	padding: 0;
	white-space: nowrap;

	text-overflow: ellipsis;
`;
const StyledSongName = styled.p`
	font-size: 1rem;
	margin: 0;
	padding: 0;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
const StyledArtistInfoContainer = styled.div`
	width: 60%;
`;

const StyledControlsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
const StyledButton = styled.div`
	align-items: center;
	justify-content: center;
	height: 25px;
	width: 35px;
	cursor: pointer;
	background-color: ${COLORS.GRAY};
	display: none;
`;

const StyledButtonPlay = styled(StyledButton)`
	background-color: ${COLORS.MAIN};
	display: flex;
`;
const StyledButtonLike = styled(StyledButton)`
	background-color: ${COLORS.WHITE};
	display: flex;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: flex-end;
`;
export {
	StyledPlayerButtons,
	StyledSoundbarContainer,
	StyledSoundBar,
	StyledCover,
	StyledSongInfo,
	StyledArtistName,
	StyledSongName,
	StyledArtistInfoContainer,
	StyledButton,
	StyledButtonsContainer,
	StyledControlsContainer,
	StyledButtonPlay,
	StyledButtonLike
};
