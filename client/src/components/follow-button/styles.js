import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledFollowingButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${COLORS.MAIN};
	background-color: ${({ following }) => {
		if (following) {
			return 'transparent';
		} else {
			return `${COLORS.WHITE}`;
		}
	}};
	border: ${({ following }) => {
		if (following) {
			return `1px solid${COLORS.MAIN}`;
		} else {
			return 'transparent';
		}
	}};
	width: 100px;
	cursor: pointer;
	:hover {
		background-color: ${COLORS.MAIN};
		color: ${COLORS.BLACK};
	}
`;

export { StyledFollowingButton };
