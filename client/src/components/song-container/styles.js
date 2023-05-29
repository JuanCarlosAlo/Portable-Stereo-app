import styled from 'styled-components';

const StyledSongContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 1rem;
	padding-right: 1rem;

	border-radius: 0.5rem;
`;
const StyledSongPlayContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1rem;
`;
export { StyledSongContainer, StyledSongPlayContainer };
