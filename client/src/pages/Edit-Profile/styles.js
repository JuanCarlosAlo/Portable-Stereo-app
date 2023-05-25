import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { HEADER_MEASUREMENTS } from '../../constants/Measurements';

const StyledEditProfile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	padding-left: 1rem;
	padding-right: 1rem;
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
	StyledMainProfileContentContainer,
	StyledEditProfile,
	StyledProfileHeader
};
