import { AppDataSource } from "../../db";
import { User } from "../../entities/userEntity";
import { userStructure } from "../../interfaces/userStructure";

const postUserController = async(user: userStructure) => {

    const userFound = await AppDataSource.getRepository(User).findOneBy({ email: user.email })

    if (userFound) throw new Error('There is a user with that email')

    const articleCreated = await AppDataSource.getRepository(User).create(user)
    const userCreated = await AppDataSource.getRepository(User).save(articleCreated)

    return userCreated;
}

export default postUserController;