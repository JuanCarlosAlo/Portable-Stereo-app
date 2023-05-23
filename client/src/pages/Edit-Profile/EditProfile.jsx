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

	const { setFetchInfo } = useFetch();

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	const [profileImg, setprofileImg] = useState({
		profileImg: currentUser.profileImg
	});

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
					onSubmit(formData, e, setFetchInfo, profileImg, currentUser)
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
					<input type='text' name='bio' id='bio' {...register('bio')} />
				</div>

				<MainButton text={'Next'} width={'250px'} type={'submit'} />
			</form>

			<p>{errors?.email?.message}</p>
		</div>
	);
};

const onSubmit = async (
	formData,
	e,
	userData,
	setFetchInfo,
	profileImg,
	currentUser
) => {
	e.preventDefault();
	const { userName, bio } = formData;
	console.log(profileImg);

	// await setFetchInfo({
	// 	url: URLS.PATCH + userData._id,
	// 	options: {
	// 		method: METHODS.PATCH,
	// 		body: JSON.stringify({}),
	// 		headers: HEADERS
	// 	}
	// });
};

export default EditProfile;
