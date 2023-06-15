import { useContext } from 'react';
import PagesButtons from '../pages-buttons/PagesButtons';
import {
	StyledHeader,
	StyledHeaderLogo,
	StyledLi,
	StyledMenu,
	StyledProfileImg,
	StyledUserInfo
} from './styles';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Auth.context';
import Loading from '../loading/Loading';

const Header = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	if (loadingFirebase) return <Loading />;
	return (
		<>
			{currentUser ? (
				<StyledHeader>
					<Link to='/'>
						<StyledHeaderLogo>dass</StyledHeaderLogo>
					</Link>
					<StyledUserInfo>
						<PagesButtons userData={currentUser} />
						<Link to={'/profile'}>
							<StyledProfileImg src={currentUser.profileImg} alt='' />
						</Link>
					</StyledUserInfo>
				</StyledHeader>
			) : (
				<StyledHeader>
					<Link to='/'>
						<StyledHeaderLogo>DASS</StyledHeaderLogo>
					</Link>
					<PagesButtons userData={currentUser} />
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
			)}
		</>
	);
};

export default Header;
