import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledAddButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0.2rem;
	cursor: pointer;
	height: 30px;
	width: 30px;
	padding: 0.4rem;
	background-color: ${COLORS.GRAY};
	@media screen and (min-width: 478px) {
		width: 35px;
	}
`;

export { StyledAddButton };
