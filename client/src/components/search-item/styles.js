import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledSeachItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 1rem;
	padding-right: 1rem;
	width: 100%;
`;
const StyledItemInfo = styled.div`
	display: flex;
	gap: 1rem;
	cursor: ${({ type }) => {
		if (type === 'Song') {
			return 'default';
		} else return 'pointer';
	}};
`;
const StyledImg = styled.img`
	height: 80px;
	width: 80px;
	border: ${({ type }) => {
		if (type === 'Artist') {
			return `1px solid ${COLORS.WHITE};`;
		} else return 'none';
	}};
	border-radius: ${({ type }) => {
		if (type === 'Artist') {
			return '50%';
		} else return '0';
	}};
`;
const StyledText = styled.p`
	margin: 0;
`;

const StyledTitle = styled(StyledText)`
	font-size: 1.2rem;
	font-weight: 600;
`;

const StyledType = styled(StyledText)`
	font-size: 0.8rem;
	font-weight: 400;
`;

export { StyledSeachItem, StyledImg, StyledItemInfo, StyledTitle, StyledType };
