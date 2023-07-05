import { Article } from "../../entities/articleEntity"
import { articleStructure } from "../../interfaces/articleStructure";
import getArticlesByIdController from "./getArticleByIdController";

const updateArticleController = async(newArticle: articleStructure) => {
    //Debe recibir siempre por body id y active para modificar el artículo

    const {id, rating, comments} = newArticle;

    const articleFound = await getArticlesByIdController(id)

    if (newArticle.active !== articleFound.active) throw new Error('Cannot modify the active property of the article')

    //Si recibe por query rating y comentarios verifica existen (null x default) y crea o actualiza según corresponda
    if (rating && comments){
        let articleRating = articleFound.rating
        if (articleRating){
            let updatedRating = articleFound.rating.concat(rating)
            newArticle.rating = updatedRating;
            await Article.save(newArticle)
        }
        else if (!articleRating) {
            articleFound.rating = rating
            await Article.save(articleFound)
    
        } 
        if(comments){
            let articleComments = articleFound.comments;
            if(!articleComments) {
                articleFound.comments = comments;
                const udatedArticle = await Article.save(articleFound);
    
                return udatedArticle;
            } 
            else {
                let updatedComments = articleFound.comments.concat(newArticle.comments)
                newArticle.comments = updatedComments;
    
                Article.merge(articleFound, newArticle)
                const udatedArticle = await Article.save(articleFound)
            
                return udatedArticle;
            }
        }
    }

    //Recibe otras propiedades por body actualiza el artículo
    Article.merge(articleFound, newArticle)
    
    const results = await Article.save(articleFound)

    return results;
}

export default updateArticleController;


