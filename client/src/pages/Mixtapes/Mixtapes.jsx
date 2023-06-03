import { useParams } from 'react-router-dom';
import { StyledSMixtapesPage } from './styles';
import MixtapesItems from '../../components/mixtapes-items/MixtapesItems';
import { USERS_URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import Loading from '../../components/loading/Loading';

const Mixtapes = () => {
	const { id } = useParams();

	const { data, loading, error } = useFetch({
		url: USERS_URLS.MIXTAPES + id
	});
	if (loading || error) return <Loading />;
	console.log(data);
	return (
		<StyledSMixtapesPage>
			<MixtapesItems
				title={'Liked mixtape'}
				author={'JC'}
				allData={data.likesData}
			/>
		</StyledSMixtapesPage>
	);
};

export default Mixtapes;
