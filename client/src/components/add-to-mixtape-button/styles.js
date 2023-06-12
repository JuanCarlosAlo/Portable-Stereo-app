import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledAddButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0.2rem;
	cursor: pointer;
	height: 30px;
	width: 35px;
	padding: 0.4rem;
	background-color: ${COLORS.GRAY};
`;

export { StyledAddButton };
