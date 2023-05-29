import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledArtistPage = styled.div`
	padding-top: 4rem;
`;

const StyledArtistHeader = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	height: 150px;
	width: 100%;
	background-image: url(${({ bgimg }) => bgimg});
	background-size: cover;
	background-position: center;
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 1) 0%,
			rgba(0, 0, 0, 0) 60%
		);
	}
`;
const StyledProfileImgContainer = styled.div`
	position: absolute;
	bottom: 50px;
`;

const StyledArtistProfileImg = styled.img`
	position: absolute;
	bottom: -60px;
	right: 10%;
	height: 120px;
	width: 120px;
	border-radius: 50%;
	border: 1px solid ${COLORS.WHITE};
	z-index: 10;
`;

export {
	StyledArtistPage,
	StyledArtistHeader,
	StyledProfileImgContainer,
	StyledArtistProfileImg
};
