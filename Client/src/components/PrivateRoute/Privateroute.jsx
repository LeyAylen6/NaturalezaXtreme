import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Privateroute = ({component: Admin, redirectPath, ...rest})=> {
    const isAuthenticated = true; 
    const isAdmin = true; 
    return(
        <Route
        {...rest}
        render={(props) =>
          isAuthenticated && isAdmin ? (
            <Admin {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );
}
export default Privateroute; 