import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { HEADER_MEASUREMENTS } from '../../constants/headerMeasurements';

const StyledRegister = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

const StyledRegisterHeader = styled.header`
	display: flex;
	align-items: center;
	height: ${HEADER_MEASUREMENTS.HEIGHT};
	margin-bottom: ${HEADER_MEASUREMENTS.MARGIN_BOTTOM};
`;
const StyledCrossButton = styled.img`
	position: absolute;
	top: 1rem;
	left: 1rem;
	height: 20px;
	width: 20px;
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
const StyledErrorText = styled.p`
	color: red;
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
		border-radius: 1rem;
		border: 1px solid ${COLORS.MAIN};
		caret-color: ${COLORS.MAIN};
	}
	::placeholder {
		color: ${COLORS.WHITE};
	}
`;

export {
	StyledCrossButton,
	StyledRegister,
	StyledInputContainer,
	StyledInput,
	StyledErrorText,
	StyledRegisterHeader
};
