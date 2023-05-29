import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledPlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	width: 40px;
	border-radius: 0.2rem;
	background-color: ${COLORS.MAIN};
	cursor: pointer;
`;

export { StyledPlay };
