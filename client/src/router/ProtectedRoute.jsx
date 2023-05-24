import { useContext } from 'react';
import { AuthContext } from '../context/Auth.context';
import { Navigate } from 'react-router-dom';
import Loading from '../components/loading/Loading';

const ProtectedRoute = ({ redirectTo = '/', children }) => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	if (loadingFirebase) return <Loading />;
	if (!currentUser) return <Navigate to={redirectTo} replace />;
	return children;
};

export default ProtectedRoute;
