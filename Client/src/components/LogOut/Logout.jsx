import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";


const Logout = () => {
  
  const { logout } = useAuth0();
  const loginOut = () => {
    logout()
    localStorage.setItem("userId", JSON.stringify(null));
  }
  
  return (
    <Link onClick={loginOut}>Log Out</Link>
  )
};

export default Logout;
