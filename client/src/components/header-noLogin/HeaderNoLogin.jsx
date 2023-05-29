import { StyledHeader, StyledHeaderLogo, StyledLi, StyledMenu } from './styles';

import { Link } from 'react-router-dom';

const HeaderNoLogin = () => {
	return (
		<StyledHeader>
			<Link to='/'>
				<StyledHeaderLogo>DASS</StyledHeaderLogo>
			</Link>

			<nav>
				<StyledMenu>
					<Link to='/register'>
						<StyledLi>Register</StyledLi>
					</Link>
					<Link to='/login'>
						<StyledLi>Log In</StyledLi>
					</Link>
				</StyledMenu>
			</nav>
		</StyledHeader>
	);
};

export default HeaderNoLogin;
