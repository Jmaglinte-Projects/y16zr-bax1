import { lazy } from 'react';

// project imports 
import MainLayout from '../layout/MainLayout';

const Home = lazy(() => import('../views/Home'));
const ErrorPage = lazy(() => import('../views/Error'));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
			{
				path: '/',
				element: <Home />
			}, 
    ]
};

export default MainRoutes;
