import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 270px;
	overflow: hidden;
`;
const StyledTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	height: fit-content;
	margin-left: auto;
	margin-right: auto;
`;

const StyledImg = styled.img`
	height: 100px;
	width: 100px;
`;

const StyledBar = styled.div`
	width: 20%;
	height: 1px;
	background-color: ${COLORS.MAIN};
	@media screen and (min-width: 768px) {
		width: 60%;
	}
`;
const StyledSliderContainer = styled.div`
	overflow-x: scroll;
`;
const StyledContent = styled.div`
	display: flex;
	width: max-content;
	align-items: center;
	gap: 1rem;
`;
export {
	StyledTitleContainer,
	StyledBar,
	StyledSection,
	StyledImg,
	StyledContent,
	StyledSliderContainer
};
