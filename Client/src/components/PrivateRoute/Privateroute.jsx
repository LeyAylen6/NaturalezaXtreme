import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, useNavigate } from 'react-router-dom';

const Privateroute = ()=> {
    const user = useSelector((state) => state.users)
    return(
       <div>
        {
            user.id ? <Outlet/> :
            <Navigate to={"/"}/>
        }


        </div>
    );
}
export default Privateroute; 