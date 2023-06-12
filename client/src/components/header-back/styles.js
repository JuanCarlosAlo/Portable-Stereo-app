import styled from 'styled-components';
import { HEADER_MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledBackHeader = styled.header`
	position: fixed;
	top: ${HEADER_MEASUREMENTS.HEIGHT};
	left: 0;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 1rem;
	padding-right: 1rem;
	background-color: ${COLORS.MODAL_BG};
	height: ${HEADER_MEASUREMENTS.HEIGHT};
`;

export { StyledBackHeader };
