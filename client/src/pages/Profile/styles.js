import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { PLAYER } from '../../constants/player';
import { HEADER_MEASUREMENTS, PADDING } from '../../constants/measurements';

const StyledProfile = styled.div`
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: ${PLAYER.HEIGHT};
	padding-top: ${HEADER_MEASUREMENTS.PADDING_TOP_BACK};
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
	font-size: 1.4rem;
	margin: 0;
	font-family: FotRodin-EB;
	color: ${COLORS.MAIN};
	@media screen and (min-width: 465px) {
		font-size: 2rem;
	}
	@media screen and (min-width: 1024px) {
		padding-left: ${PADDING.DESKTOP_MAIN};
		padding-right: ${PADDING.DESKTOP_MAIN};
	}
`;
const StyledDataTitle = styled.p`
	font-size: 1rem;
	margin: 0;
	font-family: FotRodin-EB;
`;
const Styledtext = styled.p`
	font-size: 1rem;
	margin: 0;
	font-weight: 400;
	margin-bottom: 2rem;
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
	margin-bottom: 4rem;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	padding-top: 4rem;
`;

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	gap: 1rem;
	align-items: center;

	padding: 0.5rem;
	min-width: 150px;
	max-width: 300px;
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
	StyledUsername,
	StyledButtonsContainer,
	StyledDataTitle,
	Styledtext
};
