import { Article } from "../entities/articleEntity"
import { AppDataSource } from "../db";
import { articleStructure } from "../interfaces/articleStructure";

const updateArticleController = async(newArticle: articleStructure) => {

    const articleFound = await AppDataSource.getRepository(Article).findOneBy({
        id: newArticle.id
    })

    if (!articleFound) throw new Error('There are no matches with the searched item')

    await AppDataSource.getRepository(Article).merge(articleFound, newArticle)
    const results = await AppDataSource.getRepository(Article).save(articleFound)

    return results;
}

export default updateArticleController;


