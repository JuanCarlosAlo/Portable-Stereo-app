import { useParams } from 'react-router-dom';
import { StyledSMixtapesPage } from './styles';
import MixtapesItems from '../../components/mixtapes-items/MixtapesItems';
import { USERS_URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import Loading from '../../components/loading/Loading';
import HeaderBack from '../../components/header-back/HeaderBack';
import { IMAGES } from '../../constants/imagesUrls';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';

const Mixtapes = () => {
	const { currentUser } = useContext(AuthContext);
	const { id } = useParams();

	const { data, loading, error } = useFetch({
		url: USERS_URLS.MIXTAPES + id
	});
	if (loading || error) return <Loading />;

	return (
		<StyledSMixtapesPage>
			<HeaderBack
				text={'BACK'}
				url={'/'}
				secondaryText={'+ MIXTAPE'}
				secondaryUrl={'/create-mixtape/' + id}
			/>
			<MixtapesItems
				title={'Liked mixtape'}
				author={currentUser.userName}
				allData={data.likesData}
				cover={IMAGES.LIKES_MIXTAPE}
				type={'likes'}
			/>
			{data.userMixtapes && (
				<>
					{data.userMixtapes.map(mixtape => (
						<MixtapesItems
							key={mixtape._id}
							title={mixtape.title}
							author={mixtape.artist}
							allData={mixtape}
							cover={mixtape.cover}
							edit={true}
							id={mixtape._id}
						/>
					))}
				</>
			)}
		</StyledSMixtapesPage>
	);
};

export default Mixtapes;
