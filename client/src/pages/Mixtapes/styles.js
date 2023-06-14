import styled from 'styled-components';
import { HEADER_MEASUREMENTS, PADDING } from '../../constants/measurements';

const StyledSMixtapesPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	gap: 1rem;
	padding-top: ${HEADER_MEASUREMENTS.PADDING_TOP_BACK};
	margin-bottom: ${HEADER_MEASUREMENTS.MARGIN_BOTTOM};
	@media screen and (min-width: 1024px) {
		padding-left: ${PADDING.DESKTOP_MAIN};
		padding-right: ${PADDING.DESKTOP_MAIN};
	}
`;
export { StyledSMixtapesPage };
