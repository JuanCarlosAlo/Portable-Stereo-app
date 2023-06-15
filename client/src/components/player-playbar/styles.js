import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledContainer = styled.div`
	position: relative;
	width: 100%;
`;

const StyledBar = styled.div`
	height: 3px;
	max-width: 100%;
	width: ${({ percentComplete }) => percentComplete + '%'};
`;
const StyledContainerBar = styled.div`
	position: relative;
	width: 100%;
	cursor: pointer;
	background: linear-gradient(
		90deg,
		rgba(230, 18, 43, 1) 0%,
		rgba(57, 197, 187, 1) 15%,
		rgba(57, 197, 187, 1) 85%,
		rgba(230, 18, 43, 1) 100%
	);
`;
const StyledSlideBar = styled.div`
	position: absolute;
	left: ${({ percentComplete }) => percentComplete + '%'};
	top: -50%;
	transform: translateY(-25%);
	height: 15px;
	width: 5px;
	background-color: white;
`;
const StyledDurationContainer = styled.div`
	position: absolute;
	top: -4rem;
	left: 300px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const StyledTime = styled.p`
	top: -4rem;
	right: 40%;
	display: none;
	margin: 0;
	padding: 0;
	font-family: Digital7;
	color: ${COLORS.MAIN};
	letter-spacing: 0.2rem;
	text-align: center;
	@media screen and (min-width: 600px) {
		display: block;
	}
`;
const StyledCurrentTime = styled(StyledTime)`
	font-size: 2.5rem;
`;

export {
	StyledBar,
	StyledSlideBar,
	StyledContainerBar,
	StyledDurationContainer,
	StyledCurrentTime,
	StyledTime,
	StyledContainer
};
