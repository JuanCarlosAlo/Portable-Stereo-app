import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledSection = styled.div`
	display: flex;
	gap: 1rem;
	height: 350px;
`;
const StyledTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	margin-left: auto;
	margin-right: auto;
`;

const StyledBar = styled.div`
	width: 50%;
	height: 1px;
	background-color: ${COLORS.MAIN};
	@media screen and (min-width: 340px) {
		width: 60%;
	}
`;

export { StyledTitleContainer, StyledBar, StyledSection };
