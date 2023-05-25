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
	/* animation: movingtitle 10s infinite alternate linear; */
	overflow: hidden;
	/* @keyframes movingtitle {
		to {
			text-indent: -2rem;
		}
	} */
`;
const StyledPreview = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 150px;
`;
const StyledMixtape = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: max-content;
	border: 2px solid ${COLORS.MAIN};
`;

export { StyledImg, StyledTitle, StyledPreview, StyledMixtape };
