import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { useForm } from 'react-hook-form';
import UploadPhoto from '../../components/upload-photo/UploadPhoto';
import { USERS_URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import MainButton from '../../components/main-button/MainButton';
import {
	StyledEditProfile,
	StyledImgFileContainer,
	StyledInput,
	StyledInputContainer
} from './styles';

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

			<StyledImgFileContainer>
				<UploadPhoto
					value={profileImg}
					setValue={setprofileImg}
					type={'user'}
					keyValue={'profileImg'}
					directory={currentUser.email}
				/>
			</StyledImgFileContainer>
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
				<StyledInputContainer>
					<label htmlFor='userName'>UserName</label>
					<StyledInput
						type='text'
						name='userName'
						id='userName'
						defaultValue={currentUser.userName}
						{...register('userName')}
					/>
					{usedUsername && <p>{usedUsername}</p>}
				</StyledInputContainer>
				<StyledInputContainer>
					<label htmlFor='bio'>Bio</label>
					<StyledInput
						type='text'
						name='bio'
						id='bio'
						defaultValue={currentUser.bio}
						{...register('bio')}
					/>
				</StyledInputContainer>

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
