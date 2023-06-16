import { AppDataSource } from "../../db";
import { User } from "../../entities/userEntity";

const deleteUserController = async(id: number) => {

    const userFound = await AppDataSource.getRepository(User).findOneBy({
        id: id
    })

    if (!userFound) throw new Error('There is no user with that id')
    
    await AppDataSource.getRepository(User).remove(userFound)

    return userFound;
}

export default deleteUserController;