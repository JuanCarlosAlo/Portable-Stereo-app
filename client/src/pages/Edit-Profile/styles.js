import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

import { HEADER_MEASUREMENTS } from '../../constants/headerMeasurements';

const StyledEditProfile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	padding-left: 1rem;
	padding-right: 1rem;
`;

const StyledProfileHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: ${HEADER_MEASUREMENTS.HEIGHT};
	margin-bottom: ${HEADER_MEASUREMENTS.MARGIN_BOTTOM};
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
