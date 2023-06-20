import { Article } from "../../entities/articleEntity"
import { articleStructure } from "../../interfaces/articleStructure";
import getArticlesByIdController from "./getArticleByIdController";

const updateArticleController = async(newArticle: articleStructure) => {

    const articleFound = await getArticlesByIdController(newArticle.id)

    if (newArticle.active !== articleFound.active) throw new Error('Cannot modify the active property of the article')
    
    if (newArticle.rating){
        let updatedRating = articleFound.rating.concat(newArticle.rating)
        newArticle.rating = updatedRating;
    }

    if(newArticle.comments){
        let updatedComments = articleFound.comments.concat(newArticle.comments)
        newArticle.comments = updatedComments;
    }

    Article.merge(articleFound, newArticle)
    
    const results = await Article.save(articleFound)

    return results;
}

export default updateArticleController;


