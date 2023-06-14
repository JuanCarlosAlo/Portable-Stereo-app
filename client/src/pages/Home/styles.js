import styled from 'styled-components';
import { PLAYER } from '../../constants/player';
import { HEADER_MEASUREMENTS, PADDING } from '../../constants/measurements';

const StyledHome = styled.div`
	padding-top: ${HEADER_MEASUREMENTS.HEIGHT};
	padding-bottom: ${PLAYER.HEIGHT};
	@media screen and (min-width: 1024px) {
		padding-left: ${PADDING.DESKTOP_MAIN};
		padding-right: ${PADDING.DESKTOP_MAIN};
	}
`;

export { StyledHome };
