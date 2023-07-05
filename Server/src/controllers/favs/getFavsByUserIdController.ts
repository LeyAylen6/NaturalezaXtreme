import { AppDataSource } from "../../db";
import { User } from "../../entities/userEntity";
import getArticlesByIdController from "../articles/getArticleByIdController";

const userRepository = AppDataSource.getRepository(User);

const getFavsByUserIdController = async(userId: number) => {

    const [favsByUser] = await userRepository.find({
        relations: {
            articles: true
        },
        where: {
            id: userId
        }
    })

    if (favsByUser.articles.length < 1) throw new Error('This user cannot be favorites');

    return favsByUser;
}

export default getFavsByUserIdController;