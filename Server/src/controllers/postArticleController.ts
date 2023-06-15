import { Article } from "../entities/articleEntity"
import { AppDataSource } from "../db";
import { articleStructure } from "../interfaces/articleStructure";

const postArticleController = async(article: articleStructure) => {

    const articleFound = await AppDataSource.getRepository(Article).findOneBy(article)
    console.log(article)

    if (articleFound) throw new Error('El articulo ya existe') 

    const articleCreated = await AppDataSource.getRepository(Article).create(article)
    const results = await AppDataSource.getRepository(Article).save(articleCreated)

    return results;
}

export default postArticleController;
