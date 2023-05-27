import styled from 'styled-components';

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

export { StyledBar, StyledSlideBar, StyledContainerBar };
