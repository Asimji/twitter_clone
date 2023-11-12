
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Login from './pages/login/Login';
import { Navigate } from 'react-router-dom';
import PageLoading from './pages/PageLoading';

const ProtectedRoute = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    if(loading){
        return <PageLoading/>
    }
  
    if(!user){
        return <Navigate to={'/login'}/>
    }
    return children
}

export default ProtectedRoute
