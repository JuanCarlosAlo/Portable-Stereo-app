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

const UploadPhoto = ({ value, setValue, keyValue, type, directory }) => {
	return (
		<>
			{value[keyValue] && (
				<StyledImg type={type} src={value[keyValue]} alt='' />
			)}
			<form>
				<input
					type='file'
					onChange={e =>
						handleLoadFile(
							e.target.files[0],
							setValue,
							value,
							keyValue,
							directory
						)
					}
				/>
			</form>
		</>
	);
};

const handleLoadFile = async (file, setValue, value, keyValue, directory) => {
	console.log(value[keyValue], IMAGES.DEFAULT_MIXTAPE);
	if (
		value[keyValue] !== IMAGES.DEFAULT_PROFILE &&
		value[keyValue] !== IMAGES.DEFAULT_MIXTAPE
	) {
		console.log('delete');
		const storageRefDelete = ref(storage, value[keyValue]);
		try {
			await deleteObject(storageRefDelete);
		} catch (error) {}
	}
	const nameNoExtension = file.name.substring(0, file.name.lastIndexOf('.'));
	const finalName = `${nameNoExtension}-${v4()}`;
	const storageRef = ref(storage, `${directory}/${finalName}`);
	try {
		const upload = await uploadBytes(storageRef, file);
		const imageURL = await getDownloadURL(storageRef);

		setValue({ ...value, [keyValue]: imageURL });
	} catch (error) {}
};

export default UploadPhoto;
