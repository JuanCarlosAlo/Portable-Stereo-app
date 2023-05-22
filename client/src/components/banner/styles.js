import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../../constants/colors';

const StyledBanner = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 90%;
	height: 126px;
	margin-left: auto;
	margin-right: auto;
	padding: 1rem;
	border-radius: 0.5rem;
	border: 1px solid ${COLORS.MAIN};
`;
const StyledCassete = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;

	align-items: center;
	background-image: url('/images/cassette.svg');
	background-size: contain;
	background-repeat: no-repeat;
	width: 160px;
	height: 77px;
	overflow: hidden;
	&::after {
		position: absolute;
		content: '';
		bottom: 40%;
		right: 40%;
		width: 100px;
		height: 2px;
		background-color: black;
		@media screen and (min-width: 330px) {
			bottom: 10%;
		}
	}
`;
const StyledTape = styled(motion.div)`
	position: absolute;
	background-image: url('/images/tape.svg');
	background-size: cover;
	top: -15%;
	right: 12%;
	width: 60px;
	height: 60px;
	@media screen and (min-width: 330px) {
		width: 82px;
		height: 82px;
	}
`;

const StyledTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding-bottom: 2rem;
`;

const StyledSubtitle = styled.p`
	margin: 0;
	font-size: 0.7rem;
`;

const StyledTitle = styled.h1`
	font-size: 1.5rem;
	margin: 0;
	font-family: Red-Seven;
`;

export {
	StyledBanner,
	StyledCassete,
	StyledTape,
	StyledTitle,
	StyledSubtitle,
	StyledTitleContainer
};
