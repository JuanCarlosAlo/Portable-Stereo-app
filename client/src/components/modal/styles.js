import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledModal = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: ${COLORS.MODAL_BG};
	z-index: 100;
`;
export { StyledModal };
