import { User } from "../../entities/userEntity";
import { UserProfile } from "../../interfaces/userProfile";
import { AppDataSource } from "../../db";
import nodemailerController from "../nodemailer/nodemailerController";
import findOrCreateShoppingCartController from "../shoppingCart/findOrCreateShoppingCartController";

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

    nodemailerController(true, newUser.email)
    return {id: newUser.id, rol: newUser.rol};
  }

  findOrCreateShoppingCartController(existentUser.id)
  return { id: existentUser.id, rol: existentUser.rol };  
}

export default loginController;