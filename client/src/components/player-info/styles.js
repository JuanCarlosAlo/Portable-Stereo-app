import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledCover = styled.img`
	height: 50px;
	width: 50px;
`;
const StyledSongInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	min-width: 300px;
	max-width: 450px;
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
const StyledButton = styled.div`
	align-items: center;
	justify-content: center;
	height: 30px;
	width: 40px;
	cursor: pointer;
	background-color: ${COLORS.GRAY};
	display: none;
	@media screen and (min-width: 468px) {
		display: flex;
	}
`;
const StyledButtonLike = styled(StyledButton)`
	background-color: ${COLORS.WHITE};
	display: flex;
`;

export {
	StyledArtistInfoContainer,
	StyledArtistName,
	StyledButtonLike,
	StyledCover,
	StyledSongInfo,
	StyledSongName
};
