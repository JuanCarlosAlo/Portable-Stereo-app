import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledImg = styled.img`
	height: 100px;
	width: 100px;
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
		height: 150px;
		width: 150px;
	}
`;
const StyledTitle = styled.p`
	max-width: 120px;
	font-size: 0.8rem;
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
	bottom: 30%;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 1;
	transition: opacity 0.2s ease-in-out;
	@media screen and (min-width: 1024px) {
		opacity: 0;
	}
`;
const StyledPreview = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 130px;
	cursor: pointer;

	@media screen and (min-width: 1024px) {
		width: 150px;
		&:hover ${StyledPlay} {
			opacity: 1;
		}
	}
`;

export { StyledImg, StyledTitle, StyledPreview, StyledMixtape, StyledPlay };
