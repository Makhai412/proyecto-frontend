import { useRoutes } from 'react-router-dom'; 
import Auditory from '../pages/Auditory';
import Login from '../pages/Login';
import Home from '../pages/Home';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/auditory', element: <Auditory /> },
        { path: '/api/loginUser', element: <Login /> },
        //{ path: '/*', element: <NotFound /> }
      

    ])

    return routes
}

export default AppRoutes;