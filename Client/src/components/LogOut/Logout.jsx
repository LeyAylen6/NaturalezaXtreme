import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Logout = () => {
  const { logout } = useAuth0();
  return <Link onClick={() => logout()}>Log Out</Link>;
};
export default Logout;
