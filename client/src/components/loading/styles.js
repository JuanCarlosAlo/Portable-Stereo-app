import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { motion } from 'framer-motion';

const StyledLoading = styled(motion.div)`
	position: absolute;
	display: flex;
	align-items: center;
	top: 6rem;
	left: calc(50% - 150px);
	transform: translateX(calc(-50%));
	transform: translateY(50%);
	font-size: 4rem;
	font-family: Digital7;
	letter-spacing: 0.5rem;
	color: ${COLORS.MAIN};
`;

export { StyledLoading };
