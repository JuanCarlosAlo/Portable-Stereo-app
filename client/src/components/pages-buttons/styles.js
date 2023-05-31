import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledPagesButtonsContainer = styled.ul`
	position: absolute;
	top: calc(100vh - 34px);
	left: 0;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	height: 34px;
	background-color: ${COLORS.BLACK};
`;

const StyledButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	font-size: 0.8rem;
	color: ${COLORS.WHITE};
	border: 1px solid ${COLORS.MAIN};
`;

export { StyledPagesButtonsContainer, StyledButton };
