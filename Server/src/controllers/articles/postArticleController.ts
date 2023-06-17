import { Article } from "../../entities/articleEntity"
import { AppDataSource } from "../../db";
import { articleStructure } from "../../interfaces/articleStructure";

const postArticleController = async(article: articleStructure) => {
    const articleID: string = article.articleID;

    const articleFound = await AppDataSource.getRepository(Article).findOneBy({articleID: articleID})
    console.log(articleID)

    if (articleFound) throw new Error('The article already exist') 

    const articleCreated = await Article.create(article)
    const results = await Article.save(articleCreated)

    return results;
}

export default postArticleController;
