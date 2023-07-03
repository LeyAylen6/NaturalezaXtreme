import { AppDataSource } from "../../db";
import { User } from "../../entities/userEntity";
import getArticlesByIdController from "../articles/getArticleByIdController";

const userRepository = AppDataSource.getRepository(User);

const deleteFavsController = async(userId: number, articleId: number) => {

    const [userFound] = await userRepository.find({
        relations: {
            articles: true
        },
        where: {
            id: userId
        }
    })
    
    userFound.articles = userFound.articles.filter((article) =>{
        return article.id !== articleId
    });
    
    userRepository.save(userFound)

    return `Se elimino la relacion entre ${userId} y ${articleId}`;
}

export default deleteFavsController;