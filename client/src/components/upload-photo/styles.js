import styled from 'styled-components';

const StyledAddFile = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 250px;
	width: 250px;
	background-size: contain;
	background-image: url('/images/add_file.png');
	opacity: 0;
	pointer-events: none;
`;
const StyledImg = styled.div`
	position: relative;
	height: 250px;
	width: 250px;
	background-size: cover;
	background-image: url(${({ src }) => src});
	border-radius: ${({ type }) => {
		if (type === 'user') {
			return '50%';
		} else return 0;
	}};
	object-fit: contain;
	overflow: hidden;

	&:hover ${StyledAddFile} {
		opacity: 0.8;
	}
`;

const StyledInput = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	height: 250px;
	width: 250px;
	cursor: pointer;
	opacity: 0;
`;

export { StyledImg, StyledInput, StyledAddFile };
