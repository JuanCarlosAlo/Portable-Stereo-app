import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytes
} from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../../config/firebase.config';
import { StyledImg } from './styles';
import { IMAGES } from '../../constants/imagesUrls';

const UploadPhoto = ({ profileInfo, setProfile, type, currentUser }) => {
	return (
		<>
			{profileInfo.profileImg && (
				<StyledImg type={type} src={profileInfo.profileImg} alt='' />
			)}
			<form>
				<input
					type='file'
					onChange={e =>
						handleLoadFile(
							e.target.files[0],
							setProfile,
							profileInfo,
							currentUser
						)
					}
				/>
			</form>
		</>
	);
};

const handleLoadFile = async (file, setProfile, profileInfo, currentUser) => {
	if (profileInfo.profileImg !== IMAGES.DEFAULT_PROFILE) {
		const storageRefDelete = ref(storage, profileInfo.profileImg);
		try {
			await deleteObject(storageRefDelete);
		} catch (error) {
			console.log(error);
		}
	}
	const nameNoExtension = file.name.substring(0, file.name.lastIndexOf('.'));
	const finalName = `${nameNoExtension}-${v4()}`;
	const directory = currentUser.email;
	const storageRef = ref(storage, `${directory}/${finalName}`);
	try {
		const upload = await uploadBytes(storageRef, file);
		const imageURL = await getDownloadURL(storageRef);

		setProfile({ ...profileInfo, profileImg: imageURL });
		console.log(upload);
		console.log(imageURL);
	} catch (error) {
		console.log(error);
	}
};

export default UploadPhoto;
