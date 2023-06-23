import { useAuth0 } from "@auth0/auth0-react";
import { Image, Icon } from "@chakra-ui/react";
import { TiUserOutline } from "react-icons/ti";
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <Image width="45px" borderRadius="50%" src={user.picture} alt={user.name} />
      ) : (
        <Icon as={TiUserOutline} width="70px" height="50px" bg="grey" />
      )}
    </div>
  );
};

export default Profile;
