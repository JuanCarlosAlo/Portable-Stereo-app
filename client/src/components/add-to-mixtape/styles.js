import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const AddToMixtapeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

const StyledAddToMixtapeTitle = styled.h2`
	margin-bottom: 2rem;
	font-size: 2rem;
`;

const StyledMixtapeTitle = styled.p`
	font-size: 1.2rem;
	color: ${COLORS.MAIN};
	cursor: pointer;
`;

const StyledCreateMixtape = styled(NavLink)`
	font-size: 1.5rem;
`;

export {
	StyledMixtapeTitle,
	StyledCreateMixtape,
	StyledAddToMixtapeTitle,
	AddToMixtapeContainer
};
