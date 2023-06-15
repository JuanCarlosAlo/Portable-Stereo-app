import styled from 'styled-components';

const StyledSongContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border-radius: 0.5rem;
`;
const StyledTitle = styled.p`
	white-space: nowrap;
	/* animation: movingtitle 5s infinite alternate linear; */
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 175px;
	@media screen and (min-width: 478px) {
		max-width: fit-content;
	}
`;
const StyledSongPlayContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1rem;
`;
export { StyledSongContainer, StyledSongPlayContainer, StyledTitle };
