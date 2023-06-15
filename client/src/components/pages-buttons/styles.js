import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledPagesButtonsContainer = styled.ul`
	position: fixed;
	top: calc(100vh - 34px);
	left: 0;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	height: 34px;
	background-color: ${COLORS.BLACK};
	@media screen and (min-width: 768px) {
		position: static;
		gap: 1rem;
	}
`;

const StyledButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	font-size: 0.8rem;
	color: ${COLORS.WHITE};
	border: 1px solid ${COLORS.MAIN};

	@media screen and (min-width: 1024px) {
		width: 120px;
	}
`;

export { StyledPagesButtonsContainer, StyledButton };
