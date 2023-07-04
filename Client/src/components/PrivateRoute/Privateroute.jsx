import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Privateroute = () => {

  const userId = useSelector((state) => state.userId);

  let permision;
  if (userId.rol === "admin") {
    permision = true;
  } else {
    permision = null;
  }

  return <div>{permision === true ? <Outlet /> : <Navigate to={"/"} />}</div>;
};
export default Privateroute;
