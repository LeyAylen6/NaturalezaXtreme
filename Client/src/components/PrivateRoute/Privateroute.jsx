import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const Privateroute = () => {
  const user = useSelector((state) => state.users);
  const allowedRoles = ['admin']; // Define los roles permitidos aquí

  if (allowedRoles.includes(user.rol)) {
    return <Outlet />;
  } else {
    return <Navigate to="/admin" />;
  }
}

export default Privateroute;