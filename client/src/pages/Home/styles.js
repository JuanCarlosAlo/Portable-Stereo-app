import styled from 'styled-components';

import { HEADER_MEASUREMENTS, PADDING } from '../../constants/measurements';

const StyledHome = styled.div`
	padding-top: ${HEADER_MEASUREMENTS.HEIGHT};
	padding-bottom: ${HEADER_MEASUREMENTS.MARGIN_BOTTOM};
	min-height: 100vh;
	@media screen and (min-width: 1024px) {
		padding-left: ${PADDING.DESKTOP_MAIN};
		padding-right: ${PADDING.DESKTOP_MAIN};
	}
`;

export { StyledHome };
