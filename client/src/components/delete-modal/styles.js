import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledDeleteModal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4rem;
	width: 100%;
`;

const StyledEditButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	color: ${COLORS.MAIN};
	font-weight: 800;
	max-width: 350px;
	cursor: pointer;
	&:hover {
		color: ${COLORS.WHITE};
	}
`;

export { StyledDeleteModal, StyledButtonsContainer, StyledEditButton };
