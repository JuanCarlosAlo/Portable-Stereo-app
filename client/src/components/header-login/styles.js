import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { HEADER_MEASUREMENTS } from '../../constants/Measurements';

const StyledHeader = styled.header`
	position: fixed;
	top: 1%;
	left: 1%;
	width: 98%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 2rem;
	padding-right: 2rem;
	border: 2px solid ${COLORS.MAIN};
	border-radius: 0.5rem;
	height: ${HEADER_MEASUREMENTS.HEIGHT};
	background-color: ${COLORS.BLACK};
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
	border-radius: 50%;
`;

export {
	StyledHeader,
	StyledHeaderLogo,
	StyledMenu,
	StyledLi,
	StyledProfileImg
};
