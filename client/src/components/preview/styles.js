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
const StyledPreview = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 150px;
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

export { StyledImg, StyledTitle, StyledPreview, StyledMixtape };
