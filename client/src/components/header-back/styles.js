import styled from 'styled-components';
import { HEADER_MEASUREMENTS } from '../../constants/Measurements';

const StyledBackHeader = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 1rem;
	padding-right: 1rem;
	height: ${HEADER_MEASUREMENTS.HEIGHT};
`;

export { StyledBackHeader };
