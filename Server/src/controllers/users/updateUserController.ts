import { AppDataSource } from "../../db";
import { userStructure } from "../../interfaces/userStructure";
import getUserByIdController from "./getUserByIdController";
import { User } from "../../entities/userEntity";

const updateUserController = async(newUser: userStructure) => {

    const userFound = await getUserByIdController(newUser.id)
    if(newUser.active !== userFound.active) throw new Error('Cannot modify the active property of the user')
    if(newUser.rol) newUser.rol = newUser.rol.toLowerCase();

    AppDataSource.getRepository(User).merge(userFound, newUser)
    const results = await AppDataSource.getRepository(User).save(userFound)

    return results;
}

export default updateUserController;