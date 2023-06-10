import { useLocation } from 'react-router-dom';
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
import { useForm } from 'react-hook-form';

const CreateMixtape = () => {
	const { currentUser } = useContext(AuthContext);
	const { state } = useLocation();
	const { handleSubmit, register } = useForm({ mode: 'onBlur' });

	const { setFetchInfo } = useFetch();

	const [mixtape, setMixtape] = useState({
		cover: IMAGES.DEFAULT_MIXTAPE
	});

	return (
		<StyledCreateMixtape>
			<HeaderBack text={'BACK'} url={'/mixtapes/' + currentUser._id} />
			<UploadPhoto
				setValue={setMixtape}
				value={mixtape}
				keyValue={'cover'}
				type={'song'}
				directory={currentUser.email + '/mixtapes'}
			/>
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, mixtape, currentUser, setFetchInfo, state)
				)}
			>
				<div>
					<label htmlFor='title'>Name</label>
					<input type='text' name='title' {...register('title')} />
				</div>
				<MainButton text={'Accept'} width={'250px'} type={'submit'} />
			</form>
		</StyledCreateMixtape>
	);
};

const onSubmit = async (
	formData,
	e,
	mixtape,
	currentUser,
	setFetchInfo,
	state
) => {
	e.preventDefault();

	if (!formData.title) {
		const defaultTitle = 'Mixtape ' + currentUser.mixtapes.length;
		try {
			await setFetchInfo({
				url: USERS_URLS.POST_MIXTAPE + currentUser._id,
				options: {
					method: METHODS.PATCH,
					body: JSON.stringify({
						...mixtape,
						...state,
						title: defaultTitle,
						artist: currentUser.userName,
						artistId: currentUser._id,
						...DEFAULT_MIXTAPE_VALUES
					}),
					headers: HEADERS
				},
				navigateTo: `/mixtapes/${currentUser._id}`
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
						...state,
						...formData,
						artist: currentUser.userName,
						artistId: currentUser._id,
						...DEFAULT_MIXTAPE_VALUES
					}),
					headers: HEADERS
				},
				navigateTo: `/mixtapes/${currentUser._id}`
			});
		} catch (error) {
			console.log(error);
		}
	}
};

export default CreateMixtape;
