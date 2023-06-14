import styled from 'styled-components';
import { HEADER_MEASUREMENTS, PADDING } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledSearchPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	gap: 1rem;
	min-height: 100vh;
	padding-top: ${HEADER_MEASUREMENTS.PADDING_TOP};
	padding-bottom: ${HEADER_MEASUREMENTS.MARGIN_BOTTOM};
	@media screen and (min-width: 1024px) {
		padding-left: ${PADDING.DESKTOP_MAIN};
		padding-right: ${PADDING.DESKTOP_MAIN};
	}
`;

const StyledSearchBar = styled.input`
	outline: none;
	border: none;
	background-image: none;
	background-color: transparent;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
	height: 2rem;
	font-size: 1rem;
	width: 100%;
	padding-left: 1rem;
	color: ${COLORS.WHITE};
	caret-color: ${COLORS.MAIN};
	border-bottom: 2px solid ${COLORS.MAIN};

	&:focus {
		color: ${COLORS.WHITE};
	}
`;

const StyledInputContainer = styled.div`
	position: relative;
	width: 90%;
	max-width: 450px;
	padding-top: 2rem;
	margin-bottom: 2rem;
	&::after {
		content: '';
		position: absolute;
		width: 20px;
		height: 20px;
		right: 1rem;
		bottom: 0.5rem;
		background-image: url('images/search.svg');
		background-size: cover;
	}
`;

export { StyledSearchPage, StyledSearchBar, StyledInputContainer };
