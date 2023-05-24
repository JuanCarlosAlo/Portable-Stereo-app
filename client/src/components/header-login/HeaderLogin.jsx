import { StyledHeader, StyledHeaderLogo, StyledProfileImg } from './styles';

import { Link } from 'react-router-dom';

const HeaderLogin = ({ userData }) => {
	return (
		<StyledHeader>
			<Link to='/'>
				<StyledHeaderLogo>LOGO</StyledHeaderLogo>
			</Link>

			<Link to={'/profile'}>
				<StyledProfileImg src={userData.profileImg} alt='' />
			</Link>
		</StyledHeader>
	);
};

export default HeaderLogin;
