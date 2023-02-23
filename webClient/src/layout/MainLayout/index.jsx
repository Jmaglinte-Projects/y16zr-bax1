import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
 

// project imports 


// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => { 
    return (
        <>
			<Outlet />
		</>
    ); 
};

export default MainLayout;
