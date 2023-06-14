import styled from 'styled-components';
import { PLAYER } from '../../constants/player';

const StyledUpperPlayer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: ${PLAYER.HEIGHT};
`;

export { StyledUpperPlayer };
