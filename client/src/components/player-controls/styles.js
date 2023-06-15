import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledPlayerControls = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 100%;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
`;
const StyledSoundbarContainer = styled.div`
	display: none;
	gap: 1rem;
	justify-content: flex-end;
	display: none;
	pointer-events: none;
	@media screen and (min-width: 768px) {
		display: flex;
		pointer-events: all;
	}
`;
const StyledSoundBar = styled.input`
	width: 70px;
`;

const StyledControlsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;
const StyledButton = styled.div`
	align-items: center;
	justify-content: center;
	height: 30px;
	width: 40px;
	cursor: pointer;
	background-color: ${COLORS.GRAY};
	display: none;
	@media screen and (min-width: 468px) {
		display: flex;
	}
`;
const StyledButtonPlay = styled(StyledButton)`
	background-color: ${COLORS.MAIN};
	display: flex;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: flex-end;
`;
export {
	StyledButton,
	StyledButtonPlay,
	StyledButtonsContainer,
	StyledControlsContainer,
	StyledPlayerControls,
	StyledSoundBar,
	StyledSoundbarContainer
};
