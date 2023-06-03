import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledLikeButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	width: 35px;
	border-radius: 0.2rem;
	background-color: ${COLORS.WHITE};
	cursor: pointer;
`;

export { StyledLikeButton };
