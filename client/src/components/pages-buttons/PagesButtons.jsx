import { Link } from 'react-router-dom';
import { StyledButton, StyledPagesButtonsContainer } from './styles';

const PagesButtons = ({ userData }) => {
	return (
		<nav>
			<StyledPagesButtonsContainer>
				<Link to={'/'}>
					<StyledButton>Home</StyledButton>
				</Link>
				<Link to={'/search'}>
					<StyledButton>Search</StyledButton>
				</Link>
				{userData ? (
					<Link to={'/mixtapes/' + userData.uid}>
						<StyledButton>Your Mixtapes</StyledButton>
					</Link>
				) : (
					<Link to={'/'}>
						<StyledButton>Your Mixtapes</StyledButton>
					</Link>
				)}
			</StyledPagesButtonsContainer>
		</nav>
	);
};

export default PagesButtons;
