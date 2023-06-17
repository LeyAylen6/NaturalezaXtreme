import { AppDataSource } from "../../db";
import { Article } from "../../entities/articleEntity";
import getArticlesByIdController from "./getArticleByIdController";

const desactivateArticleController = async(id: number, active: boolean) => {

    const articleFound = await getArticlesByIdController(id)
    let newArticle = {...articleFound};

    newArticle.active = active;

    await AppDataSource.getRepository(Article).merge(articleFound, newArticle)
    const results = await AppDataSource.getRepository(Article).save(articleFound)

    return results;
    
}

export default desactivateArticleController;