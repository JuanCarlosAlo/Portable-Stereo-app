import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	gap: 1rem;
	align-items: center;
	padding: 0.5rem;
	width: ${({ width }) => width};
	margin-bottom: 2rem;
	margin-right: auto;
	margin-left: auto;
	border: 1px solid ${COLORS.MAIN};
	border-radius: 0.5rem;
	color: ${COLORS.WHITE};
	background-color: transparent;
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.WHITE};
		color: ${COLORS.BLACK};
	}
`;

export { StyledButton };
