import { useState } from 'react';

import CrossButton from '../cross-button/CrossButton';

import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import { USERS_URLS } from '../../constants/urls';
import UploadPhoto from '../upload-photo/UploadPhoto';
import { useForm } from 'react-hook-form';
import MainButton from '../main-button/MainButton';

const EditMixtapeModal = ({
	setContent,
	id,
	setFetchInfo,
	currentUser,
	mixtapeData
}) => {
	const { handleSubmit, register } = useForm({ mode: 'onBlur' });
	const [cover, setCover] = useState({
		cover: mixtapeData.cover
	});
	return (
		<div>
			<CrossButton setState={setContent} stateValue={null} />
			<UploadPhoto
				setValue={setCover}
				value={cover}
				keyValue={'cover'}
				type={'song'}
				directory={currentUser.email + '/mixtapes'}
			/>
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(
						formData,
						e,
						setFetchInfo,
						currentUser,
						setContent,
						cover,
						id
					)
				)}
			>
				<div>
					<label htmlFor='title'>Name</label>
					<input
						type='text'
						name='title'
						defaultValue={mixtapeData.title}
						{...register('title')}
					/>
				</div>
				<MainButton text={'Accept'} width={'250px'} type={'submit'} />
			</form>
		</div>
	);
};

const onSubmit = async (
	formData,
	e,
	setFetchInfo,
	currentUser,
	setContent,
	cover,
	mixtapeId
) => {
	e.preventDefault();
	try {
		await setFetchInfo({
			url: USERS_URLS.EDIT_MIXTAPE + currentUser._id,
			options: {
				method: METHODS.PATCH,
				body: JSON.stringify({ ...formData, ...cover, mixtapeId }),
				headers: HEADERS
			},
			navigateTo: `/mixtapes/${currentUser._id}`
		});
		setContent(null);
	} catch (error) {
		console.log(error);
	}
};

export default EditMixtapeModal;
