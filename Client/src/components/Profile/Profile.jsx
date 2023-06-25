import { useAuth0 } from "@auth0/auth0-react";
import { Image, Icon, Stack } from "@chakra-ui/react";
import { TiUserOutline } from "react-icons/ti";
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <Stack borderRadius={29} borderColor="white" borderWidth={0.3}>
      {isAuthenticated ? (
        <Image width="45px" borderRadius={30} src={user.picture} alt={user.name} />
      ) : (
        <Icon as={TiUserOutline} width="50px" height="50px" bg="grey" borderRadius={30} />
      )}
    </Stack>
  );
};

export default Profile;
