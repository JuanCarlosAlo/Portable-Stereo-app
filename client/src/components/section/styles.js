import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: ${({ showMore }) => {
		if (showMore) {
			return 'fit-content';
		} else {
			return '270px';
		}
	}};
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
		width: 90%;
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

const StyledShowMoreButton = styled.p`
	font-weight: 800;
	margin: 0;
	color: ${COLORS.MAIN};
	cursor: pointer;
`;

const StyledSectionTitle = styled.p`
	font-weight: 800;
`;

export {
	StyledTitleContainer,
	StyledBar,
	StyledSection,
	StyledImg,
	StyledContent,
	StyledSliderContainer,
	StyledShowMoreButton,
	StyledSectionTitle
};
