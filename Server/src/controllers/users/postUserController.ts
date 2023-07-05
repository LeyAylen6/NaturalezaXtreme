import { AppDataSource } from "../../db";
import { User } from "../../entities/userEntity";
import { userStructure } from "../../interfaces/userStructure";

const postUserController = async(user: userStructure) => {

    const userFound = await User.findOneBy({ email: user.email })

    if (userFound) throw new Error('There is a user with that email')

    const userToCreate = await AppDataSource.getRepository(User).create(user)
    await AppDataSource.getRepository(User).insert(userToCreate)

    return userToCreate;
}

export default postUserController;
