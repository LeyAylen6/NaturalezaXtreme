import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Privateroute = ()=> {
    const users= useSelector((state) => state.users)

    const {user}=useAuth0()
    console.log(user);
    const userFinded= users.find(element => element.email===user.email)

    let permision;
    if(userFinded && userFinded.rol==="Admin"){
         permision = userFinded
        
    }else {
        permision = null
    }

    return(
       <div>
        {
             permision !== null ? <Outlet/> :
            <Navigate to={"/"}/>
        }


        </div>
    );
}
export default Privateroute;