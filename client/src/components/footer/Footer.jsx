import { Link } from 'react-router-dom';
import {
	StyledAuthorInfo,
	StyledFooter,
	StyledFooterText,
	StyledGithubLink,
	StyledHeaderLogo
} from './styles';
import ButtonIcon from '../button-icon/ButtonIcon';

const Footer = () => {
	return (
		<StyledFooter>
			<Link to='/'>
				<StyledHeaderLogo>dass</StyledHeaderLogo>
			</Link>
			<StyledAuthorInfo>
				<StyledFooterText>Developed and designed by J.C.A.M</StyledFooterText>

				<StyledGithubLink
					target='_blank'
					to='https://github.com/JuanCarlosAlo/Portable-Stereo-app/tree/main'
				>
					<ButtonIcon img={'/images/github.svg'} />
				</StyledGithubLink>
			</StyledAuthorInfo>
		</StyledFooter>
	);
};

export default Footer;
