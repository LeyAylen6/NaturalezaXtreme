import { AppDataSource } from "../../db";
import { User } from "../../entities/userEntity";
import getArticlesByIdController from "../articles/getArticleByIdController";

const userRepository = AppDataSource.getRepository(User);

const addFavsController = async(userId: number, articleId: number) => {

    const articleFound = await getArticlesByIdController(articleId)
    const [userFound] = await userRepository.find({
        relations: {
            articles: true
        },
        where: {
            id: userId
        }
    })

    userFound.articles.push(articleFound);
    userRepository.save(userFound)

    return articleFound;
}

export default addFavsController;