import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { useForm } from 'react-hook-form';
import UploadPhoto from '../../components/upload-photo/UploadPhoto';
import { URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import MainButton from '../../components/main-button/MainButton';

const EditProfile = () => {
	const { currentUser } = useContext(AuthContext);
	if (!currentUser) return;
	const { data, loading, setFetchInfo } = useFetch({ url: URLS.ALL });

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	const [profileImg, setprofileImg] = useState({
		profileImg: currentUser.profileImg
	});

	if (loading) return;
	return (
		<div>
			<h2>Edit profile</h2>
			<div>
				<UploadPhoto
					profileInfo={profileImg}
					setProfile={setprofileImg}
					type={'user'}
					currentUser={currentUser}
				/>
			</div>
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, setFetchInfo, profileImg, currentUser, data)
				)}
			>
				<div>
					<label htmlFor='userName'>UserName</label>
					<input
						type='text'
						name='userName'
						id='userName'
						placeholder={currentUser.userName}
						{...register('userName')}
					/>
				</div>
				<div>
					<label htmlFor='bio'>Bio</label>
					<input
						type='text'
						name='bio'
						id='bio'
						placeholder={currentUser.bio}
						{...register('bio')}
					/>
				</div>

				<MainButton text={'Accept'} width={'250px'} type={'submit'} />
			</form>

			<p>{errors?.email?.message}</p>
		</div>
	);
};

const onSubmit = async (
	formData,
	e,
	setFetchInfo,
	profileImg,
	currentUser,
	data
) => {
	e.preventDefault();
	const { userName, bio } = formData;
	if (userName === '' || userName === currentUser.userName) {
		try {
			await setFetchInfo({
				url: URLS.PATCH + currentUser._id,
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
		} catch (error) {
			console.log(error);
		}
	} else {
		const usedUserName = data.find(user => user.userName === userName);
		console.log(usedUserName);
		if (!usedUserName) {
			try {
				await setFetchInfo({
					url: URLS.PATCH + currentUser._id,
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
			} catch (error) {
				console.log(error);
			}
		} else {
			console.log('this username is already in use');
		}
	}
};

export default EditProfile;
