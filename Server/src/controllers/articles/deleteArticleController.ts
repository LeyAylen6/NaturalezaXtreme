import { AppDataSource } from "../../db";
import { Article } from "../../entities/articleEntity";
import getArticlesByIdController from "./getArticleByIdController";

const deleteArticleController = async(id: number) => {

    const articleFound = await getArticlesByIdController(id)
    
    await AppDataSource.getRepository(Article).remove(articleFound)

    return articleFound;
}

export default deleteArticleController;