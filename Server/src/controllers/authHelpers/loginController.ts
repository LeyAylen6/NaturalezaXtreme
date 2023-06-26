import { User } from "../../entities/userEntity";
import { UserProfile } from "../../interfaces/userProfile";

const loginController = async(user: any)=>{

  const {email} = user;
  const userToCreate: UserProfile = {
    name: user.given_name,
    email: user.email,
    avatar: user.picture,
    rol: "user",
    active: true,
    password: user.sub
  }

  const findUser = await User.findOneBy({email: email});
  if(findUser) return {"id": findUser.id};

  const createdUser = await User.insert(userToCreate)

  console.log(createdUser)
  return createdUser.identifiers[0];
  
}
export default loginController;
