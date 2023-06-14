import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

import { PLAYER } from '../../constants/player';
import { NavLink } from 'react-router-dom';

const StyledFooter = styled.div`
	position: absolute;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	left: 0;
	bottom: ${PLAYER.HEIGHT};
	transform: translateY(100%);
	width: 100%;
	height: 180px;
	padding-right: 1rem;
	padding-left: 1rem;
	background-color: ${COLORS.BLACK};
	color: ${COLORS.MAIN};
`;

const StyledHeaderLogo = styled.h1`
	font-family: Red-Seven;
	font-size: 1rem;
`;

const StyledAuthorInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: flex-end;
`;

const StyledGithubLink = styled(NavLink)`
	height: 24px;
	width: 24px;
`;
const StyledFooterText = styled.p`
	margin-top: 0.5rem;
	font-size: 0.8rem;
`;

export {
	StyledFooter,
	StyledHeaderLogo,
	StyledAuthorInfo,
	StyledGithubLink,
	StyledFooterText
};
