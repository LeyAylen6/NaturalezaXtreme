import { User } from "../../entities/userEntity";
import { UserProfile } from "../../interfaces/userProfile";
import { AppDataSource } from "../../db";

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

  const existentUser = await AppDataSource.getRepository(User).findOneBy({ 
    email: email,
  })

  if(!existentUser) {
    const userCreated = await AppDataSource.getRepository(User).create(userToCreate)
    const newUser = await AppDataSource.getRepository(User).save(userCreated)
    console.log(newUser)
    return newUser.id;
}

return existentUser.id;
  
}
export default loginController;
