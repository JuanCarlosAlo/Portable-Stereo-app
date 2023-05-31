import { useParams } from 'react-router-dom';

const Mixtapes = () => {
	const { id } = useParams();
	console.log(id);
	return <div>Mixtapes</div>;
};

export default Mixtapes;
