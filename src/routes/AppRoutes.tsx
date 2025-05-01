import { useRoutes } from 'react-router-dom'; 
import Auditory from '../pages/Auditory';
import Login from '../pages/Login';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/auditory', element: <Auditory /> },
        { path: '/api/loginUser', element: <Login /> },
        //{ path: '/*', element: <NotFound /> }
      

    ])

    return routes
}

export default AppRoutes;