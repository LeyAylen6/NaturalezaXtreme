import { Article } from "../../entities/articleEntity"
import { articleStructure } from "../../interfaces/articleStructure";

const postArticleController = async(article: articleStructure) => {
    const articleID: string = article.articleID;

    const articleFound = await Article.findOneBy({articleID: articleID})

    if (articleFound) throw new Error('The article already exist') 

    const articleCreated = await Article.create(article)
    const results = await Article.save(articleCreated)

    return results;
}

export default postArticleController;
