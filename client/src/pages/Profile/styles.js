import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { PLAYER } from '../../constants/player';
import { HEADER_MEASUREMENTS } from '../../constants/Measurements';

const StyledProfile = styled.div`
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: ${PLAYER.HEIGHT};
	padding-top: ${HEADER_MEASUREMENTS.MARGIN_BOTTOM};
`;

const StyledProfileHeader = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 1rem;
	padding-right: 1rem;
	height: ${HEADER_MEASUREMENTS.HEIGHT};
`;
const StyledUsername = styled.p`
	font-size: 1rem;
	margin: 0;
	font-family: FotRodin-EB;
	color: ${COLORS.MAIN};
	@media screen and (min-width: 465px) {
		font-size: 2rem;
	}
`;

const StyledProfileImage = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-image: ${({ bgImg }) => {
		if (bgImg) {
			return `
				url(bgImg);
			`;
		} else {
			return `
				url('/public/images/profile_default.svg');
			`;
		}
	}};
	background-size: cover;
`;
const StyledMainProfileContentContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	gap: 1rem;
	align-items: center;
	padding: 0.5rem;
	width: 100%;
	margin-bottom: 2rem;
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

export {
	StyledButton,
	StyledProfileImage,
	StyledMainProfileContentContainer,
	StyledProfile,
	StyledProfileHeader,
	StyledUsername
};
