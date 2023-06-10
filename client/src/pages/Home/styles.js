import styled from 'styled-components';
import { PLAYER } from '../../constants/player';
import { HEADER_MEASUREMENTS } from '../../constants/Measurements';

const StyledHome = styled.div`
	padding-top: ${HEADER_MEASUREMENTS.HEIGHT};
	padding-bottom: ${PLAYER.HEIGHT};
`;

export { StyledHome };
