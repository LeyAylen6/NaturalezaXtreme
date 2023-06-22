import { useAuth0 } from "@auth0/auth0-react";
const Profile = () => {
    const {user, isAuthenticated} = useAuth0();
    return(
        <div>
         { isAuthenticated ?
        <img src={user.picture} alt={user.name}/>
        : null  }
        </div>
    )
}

export default Profile;