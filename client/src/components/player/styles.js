import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { PLAYER } from '../../constants/player';

const StyledPlayerContainer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: ${PLAYER.HEIGHT};
	width: 100%;
	padding-bottom: 0.8rem;

	background-color: ${COLORS.BLACK};
`;

export { StyledPlayerContainer };
