import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { HEADER_MEASUREMENTS, PADDING } from '../../constants/measurements';

const StyledEditProfile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-left: 1rem;
	padding-right: 1rem;

	padding-top: ${HEADER_MEASUREMENTS.PADDING_TOP_BACK};
	padding-bottom: ${HEADER_MEASUREMENTS.MARGIN_BOTTOM};
	@media screen and (min-width: 1024px) {
		padding-left: ${PADDING.DESKTOP_MAIN};
		padding-right: ${PADDING.DESKTOP_MAIN};
	}
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
const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	max-width: 300px;
	margin-bottom: 1rem;
	@media screen and (min-width: 360px) {
	}
`;
const StyledErrorText = styled.label`
	color: red;
`;

const StyledImgFileContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;
`;

const StyledInput = styled.input`
	background-color: transparent;
	border: none;
	background-image: none;
	background-color: transparent;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
	width: 100%;
	border-bottom: 1px solid ${COLORS.MAIN};
	height: 3rem;
	padding-left: 1rem;
	padding-right: 1rem;
	color: ${COLORS.WHITE};

	&:focus {
		outline: none;

		border: 1px solid ${COLORS.MAIN};
		caret-color: ${COLORS.MAIN};
	}
	::placeholder {
		color: ${COLORS.WHITE};
	}
`;

export {
	StyledButton,
	StyledMainProfileContentContainer,
	StyledEditProfile,
	StyledProfileHeader,
	StyledInputContainer,
	StyledErrorText,
	StyledInput,
	StyledImgFileContainer
};
