import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledButton = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	cursor: pointer;
`;

const StyledText = styled.p`
	margin: 0;
	padding: 0;
	color: ${COLORS.MAIN};
	font-family: FotRodin-EB;
`;

export { StyledButton, StyledText };
