import styled from 'styled-components';
import { HEADER_MEASUREMENTS } from '../../constants/measurements';

const StyledSMixtapesPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	gap: 1rem;
	padding-top: ${HEADER_MEASUREMENTS.PADDING_TOP};
`;
export { StyledSMixtapesPage };
