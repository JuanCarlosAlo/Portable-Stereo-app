import styled from 'styled-components';
import { HEADER_MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledEditMixtape = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	padding-top: ${HEADER_MEASUREMENTS.PADDING_TOP_BACK};
	padding-bottom: ${HEADER_MEASUREMENTS.MARGIN_BOTTOM};
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

export { StyledEditMixtape, StyledInputContainer, StyledInput };
