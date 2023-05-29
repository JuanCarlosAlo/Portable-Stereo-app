import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { Navigate, useParams } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import { useFetch } from '../../hooks/useFetch';
import { USERS_URLS } from '../../constants/urls';
import HeaderLogin from '../../components/header-login/HeaderLogin';
import HeaderNoLogin from '../../components/header-noLogin/HeaderNoLogin';
import {
	StyledArtistHeader,
	StyledArtistPage,
	StyledArtistProfileImg
} from './styles';
import Section from '../../components/section/Section';

const Artist = () => {
	const { id } = useParams();

	const { currentUser, loadingFirebase } = useContext(AuthContext);
	const { data, loading, error } = useFetch({ url: USERS_URLS.ALL + id });
	if (loadingFirebase || loading || error) return <Loading />;
	if (currentUser.uid === id) return <Navigate to={'/'} />;
	console.log(data);
	return (
		<StyledArtistPage>
			{currentUser ? <HeaderLogin userData={currentUser} /> : <HeaderNoLogin />}
			<div>
				<StyledArtistHeader bgimg={data.headerImg}>
					<StyledArtistProfileImg src={data.profileImg} />
				</StyledArtistHeader>
				<div>
					<p>{data.userName}</p>
					<div>
						<p>{data.bio}</p>
						<div>
							<p>Followers: {data.follows.othersFollows}</p>
							<p>likes: {data.likes.othersLikes}</p>
						</div>
					</div>
				</div>
				<Section allData={data.uploads.tracksUploads} title={'FEATURED'} />
			</div>
		</StyledArtistPage>
	);
};

export default Artist;
