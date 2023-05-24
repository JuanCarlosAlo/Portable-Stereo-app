import styled from 'styled-components';

const StyledImg = styled.img`
	height: 250px;
	width: 250px;
	border-radius: ${({ type }) => {
		if (type === 'user') {
			return '50%';
		} else return 0;
	}};
	object-fit: cover;
`;

export { StyledImg };
