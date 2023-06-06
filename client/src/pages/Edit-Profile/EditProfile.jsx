import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { useForm } from 'react-hook-form';
import UploadPhoto from '../../components/upload-photo/UploadPhoto';
import { USERS_URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import MainButton from '../../components/main-button/MainButton';
import { StyledEditProfile } from './styles';

import HeaderBack from '../../components/header-back/HeaderBack';

const EditProfile = () => {
	const { currentUser } = useContext(AuthContext);

	const { data, loading, setFetchInfo } = useFetch({ url: USERS_URLS.ALL });

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	const [profileImg, setprofileImg] = useState({
		profileImg: currentUser.profileImg
	});
	const [usedUsername, setUsedUsername] = useState();

	if (loading) return;
	return (
		<StyledEditProfile>
			<HeaderBack url={'/profile'} text={'BACK'} />

			<div>
				<UploadPhoto
					value={profileImg}
					setValue={setprofileImg}
					type={'user'}
					keyValue={'profileImg'}
					directory={currentUser.email}
				/>
			</div>
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(
						formData,
						e,
						setFetchInfo,
						profileImg,
						currentUser,
						data,
						setUsedUsername
					)
				)}
			>
				<div>
					<label htmlFor='userName'>UserName</label>
					<input
						type='text'
						name='userName'
						id='userName'
						defaultValue={currentUser.userName}
						{...register('userName')}
					/>
					{usedUsername && <p>{usedUsername}</p>}
				</div>
				<div>
					<label htmlFor='bio'>Bio</label>
					<input
						type='text'
						name='bio'
						id='bio'
						defaultValue={currentUser.bio}
						{...register('bio')}
					/>
				</div>

				<MainButton text={'Accept'} width={'250px'} type={'submit'} />
			</form>

			<p>{errors?.email?.message}</p>
		</StyledEditProfile>
	);
};

const onSubmit = async (
	formData,
	e,
	setFetchInfo,
	profileImg,
	currentUser,
	data,
	setUsedUsername
) => {
	e.preventDefault();
	const { userName, bio } = formData;
	if (userName === '' || userName === currentUser.userName) {
		try {
			await setFetchInfo({
				url: USERS_URLS.PATCH + currentUser._id,
				options: {
					method: METHODS.PATCH,
					body: JSON.stringify({
						...profileImg,
						bio
					}),
					headers: HEADERS
				},
				navigateTo: '/profile'
			});
		} catch (error) {}
	} else {
		const usedUserName = data.find(user => user.userName === userName);

		if (!usedUserName) {
			try {
				await setFetchInfo({
					url: USERS_URLS.PATCH + currentUser._id,
					options: {
						method: METHODS.PATCH,
						body: JSON.stringify({
							...profileImg,
							bio,
							userName
						}),
						headers: HEADERS
					},
					navigateTo: '/profile'
				});
			} catch (error) {}
		} else {
			setUsedUsername('This username is already in use');
		}
	}
};

export default EditProfile;
