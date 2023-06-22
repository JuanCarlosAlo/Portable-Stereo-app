import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { v4 } from 'uuid';
import { useFetch } from '../../hooks/useFetch';
import CrossButton from '../cross-button/CrossButton';

import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import { USERS_URLS } from '../../constants/urls';
import {
	AddToMixtapeContainer,
	StyledAddToMixtapeTitle,
	StyledCreateMixtape,
	StyledMixtapeTitle
} from './styles';

const AddToMixtape = ({ setContent, id }) => {
	const { setFetchInfo } = useFetch();
	const { currentUser } = useContext(AuthContext);
	return (
		<AddToMixtapeContainer>
			<StyledAddToMixtapeTitle>Add to mixtape</StyledAddToMixtapeTitle>
			<CrossButton setState={setContent} stateValue={null} />
			<StyledCreateMixtape to={'/create-mixtape'} state={{ songToAdd: id }}>
				+ Create Mixtape
			</StyledCreateMixtape>
			{currentUser.mixtapes && (
				<>
					{currentUser.mixtapes.map((mixtapes, index) => (
						<StyledMixtapeTitle
							onClick={() =>
								handleClick(setFetchInfo, id, setContent, currentUser, index)
							}
							key={v4()}
						>
							{mixtapes.title}
						</StyledMixtapeTitle>
					))}
				</>
			)}
		</AddToMixtapeContainer>
	);
};

const handleClick = async (
	setFetchInfo,
	id,
	setContent,
	currentUser,
	mixtape
) => {
	try {
		await setFetchInfo({
			url: USERS_URLS.ADD_TO_MIXTAPE + currentUser._id,
			options: {
				method: METHODS.PATCH,
				body: JSON.stringify({ songToAdd: id, mixtape }),
				headers: HEADERS
			}
		});
		setContent(null);
	} catch (error) {
		console.log(error);
	}
};

export default AddToMixtape;
