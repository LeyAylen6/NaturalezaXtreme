import { Article } from "../../entities/articleEntity"
import { AppDataSource } from "../../db";
import { articleStructure } from "../../interfaces/articleStructure";
import getArticlesByIdController from "./getArticleByIdController";

const updateArticleController = async(newArticle: articleStructure) => {

    const articleFound = await getArticlesByIdController(newArticle.id)

    await AppDataSource.getRepository(Article).merge(articleFound, newArticle)
    const results = await AppDataSource.getRepository(Article).save(articleFound)

    return results;
}

export default updateArticleController;


