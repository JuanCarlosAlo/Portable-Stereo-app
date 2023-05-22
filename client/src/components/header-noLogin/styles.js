import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { HEADER_MEASUREMENTS } from '../../constants/headerMeasurements';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 2rem;
	padding-right: 2rem;
	height: ${HEADER_MEASUREMENTS.HEIGHT};
	margin-bottom: ${HEADER_MEASUREMENTS.MARGIN_BOTTOM};
`;

const StyledHeaderLogo = styled.h1`
	font-size: 1rem;
`;

const StyledLi = styled.li`
	color: ${COLORS.MAIN};
	cursor: pointer;
`;

const StyledMenu = styled.ul`
	display: flex;
	gap: 2rem;
`;

const StyledProfileImg = styled.img`
	width: 48px;
	height: 48px;
`;

export {
	StyledHeader,
	StyledHeaderLogo,
	StyledMenu,
	StyledLi,
	StyledProfileImg
};
