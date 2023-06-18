import { AppDataSource } from "../../db";
import { User } from "../../entities/userEntity";

const deactivateUserController = async(id: number, active: boolean) => {

    const userFound = await AppDataSource.getRepository(User).findOneBy({
        id: id
    })

    if (!userFound) throw new Error('There is no user with that id')

    let newUser = {...userFound}
    newUser.active = active

    
    await AppDataSource.getRepository(User).merge(userFound, newUser)
    const results = await AppDataSource.getRepository(User).save(userFound)

    return results;
}

export default deactivateUserController;