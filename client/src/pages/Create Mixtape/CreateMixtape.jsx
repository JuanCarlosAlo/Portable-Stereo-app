import { useParams } from 'react-router-dom';
import HeaderBack from '../../components/header-back/HeaderBack';
import { StyledCreateMixtape } from './styles';
import UploadPhoto from '../../components/upload-photo/UploadPhoto';
import { useContext, useState } from 'react';
import { IMAGES } from '../../constants/imagesUrls';
import { AuthContext } from '../../context/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { USERS_URLS } from '../../constants/urls';
import MainButton from '../../components/main-button/MainButton';
import { DEFAULT_MIXTAPE_VALUES } from '../../constants/defaultMixtapeValues';

const CreateMixtape = () => {
	const { currentUser } = useContext(AuthContext);
	const { id } = useParams();

	const { setFetchInfo } = useFetch();

	const [mixtape, setMixtape] = useState({
		cover: IMAGES.DEFAULT_MIXTAPE,
		title: ''
	});

	return (
		<StyledCreateMixtape>
			<HeaderBack text={'BACK'} url={'/mixtapes/' + id} />
			<UploadPhoto
				setValue={setMixtape}
				value={mixtape}
				keyValue={'cover'}
				type={'song'}
				directory={currentUser.email + '/mixtapes'}
			/>
			<form onSubmit={e => handleSubmit(mixtape, currentUser, setFetchInfo, e)}>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						onChange={e => setMixtape({ ...mixtape, title: e.target.value })}
						type='text'
						name='name'
					/>
				</div>
				<MainButton text={'Accept'} width={'250px'} type={'submit'} />
			</form>
		</StyledCreateMixtape>
	);
};

const handleSubmit = async (mixtape, currentUser, setFetchInfo, e) => {
	e.preventDefault();
	if (!mixtape.title) {
		const defaultTitle = 'Mixtape #' + currentUser.mixtapes.length;
		try {
			await setFetchInfo({
				url: USERS_URLS.POST_MIXTAPE + currentUser._id,
				options: {
					method: METHODS.PATCH,
					body: JSON.stringify({
						...mixtape,
						title: defaultTitle,
						artist: currentUser.userName,
						artistId: currentUser._id,
						...DEFAULT_MIXTAPE_VALUES
					}),
					headers: HEADERS
				},
				navigateTo: '/mixtapes/' + currentUser._id
			});
		} catch (error) {
			console.log(error);
		}
	} else {
		try {
			await setFetchInfo({
				url: USERS_URLS.POST_MIXTAPE + currentUser._id,
				options: {
					method: METHODS.PATCH,
					body: JSON.stringify({
						...mixtape,
						artist: currentUser.userName,
						artistId: currentUser._id,
						...DEFAULT_MIXTAPE_VALUES
					}),
					headers: HEADERS
				},
				navigateTo: '/mixtapes/' + currentUser._id
			});
		} catch (error) {
			console.log(error);
		}
	}
};

export default CreateMixtape;
