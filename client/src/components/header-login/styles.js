import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 2rem;
	padding-right: 2rem;
	height: 60px;
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
