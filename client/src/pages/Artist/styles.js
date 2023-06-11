import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { HEADER_MEASUREMENTS } from '../../constants/Measurements';

const StyledArtistPage = styled.div`
	padding-top: 4rem;
	margin-bottom: ${HEADER_MEASUREMENTS.MARGIN_BOTTOM};
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
const StyledArtistInfo = styled.div`
	padding-left: 1rem;
	padding-right: 1rem;
`;

const StyledArtistContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const StyledBio = styled.p`
	width: 50%;
	font-size: 0.8rem;
`;
const StyledArtistName = styled.p`
	font-size: 1.2rem;
`;

const StyledTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: fit-content;
`;

const StyledShowMoreButton = styled.p`
	font-weight: 800;
	margin: 0;
	color: ${COLORS.MAIN};
	cursor: pointer;
`;

const StyledPopularContainer = styled.div`
	padding-left: 1rem;
	padding-right: 1rem;
	height: ${({ showMore }) => {
		if (showMore) {
			return 'fit-content';
		} else {
			return '300px';
		}
	}};
	overflow: hidden;
	margin-bottom: 2rem;
`;
const StyledSectionTitle = styled.p`
	font-weight: 800;
`;
export {
	StyledArtistPage,
	StyledArtistHeader,
	StyledProfileImgContainer,
	StyledArtistProfileImg,
	StyledArtistContainer,
	StyledBio,
	StyledArtistInfo,
	StyledArtistName,
	StyledTitleContainer,
	StyledPopularContainer,
	StyledShowMoreButton,
	StyledSectionTitle
};
