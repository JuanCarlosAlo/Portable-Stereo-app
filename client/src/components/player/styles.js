import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { PLAYER } from '../../constants/player';

const StyledPlayerContainer = styled.div`
	position: fixed;
	bottom: 2%;
	left: 1%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${PLAYER.HEIGHT};
	width: 98%;
	border-radius: 0.5rem;
	background-color: ${COLORS.BLACK};
`;

export { StyledPlayerContainer };
