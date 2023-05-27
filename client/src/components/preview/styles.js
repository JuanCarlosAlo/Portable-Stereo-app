import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledImg = styled.img`
	height: 90;
	width: 90px;
	border-radius: ${({ type }) => {
		if (type === 'user') {
			return '50%';
		} else return 0;
	}};
	border: ${({ type }) => {
		if (type === 'user') {
			return '2px solid white';
		}
	}};
	object-fit: cover;
	@media screen and (min-width: 468px) {
		height: 100px;
		width: 100px;
	}
`;
const StyledTitle = styled.p`
	max-width: 150px;
	white-space: nowrap;
	/* animation: movingtitle 5s infinite alternate linear; */
	overflow: hidden;
	text-overflow: ellipsis;
`;

const StyledMixtape = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: 1rem;
	align-items: center;
	width: 98%;
	border: 2px solid ${COLORS.MAIN};
	border-radius: 0.5rem;
	overflow: hidden;
`;

const StyledPlay = styled.div`
	position: absolute;
	right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 40px;
	background-color: ${COLORS.MAIN};
	opacity: 0;
	transition: opacity 0.2s ease-in-out;
`;
const StyledPreview = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 150px;
	cursor: pointer;
	&:hover ${StyledPlay} {
		opacity: 1;
	}
`;

export { StyledImg, StyledTitle, StyledPreview, StyledMixtape, StyledPlay };
