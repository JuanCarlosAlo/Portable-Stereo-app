import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledMixtapeContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	padding-right: 1rem;
	margin-left: auto;
	margin-right: auto;
	border: 1px solid ${COLORS.MAIN};
`;

const StyledImg = styled.img`
	height: 80px;
	width: 80px;
`;

const StyledContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	font-size: 1.2rem;
	letter-spacing: 0.2rem;
	cursor: pointer;
`;
const StyledInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 80px;
	padding: 0.5rem;
`;

const StyledMixtapeTitle = styled.p`
	margin: 0;
	font-size: 1.2rem;
	font-family: digital7;
`;
const StyledMixtapeInfo = styled.p`
	font-size: 0.8rem;
	margin: 0;
`;
export {
	StyledMixtapeContainer,
	StyledImg,
	StyledContent,
	StyledMixtapeTitle,
	StyledMixtapeInfo,
	StyledInfoContainer
};
