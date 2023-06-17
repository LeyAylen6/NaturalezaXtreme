import { AppDataSource } from "../../db";
import { Article } from "../../entities/articleEntity"

const getArticlesByIdController = async(id: number, articleID?: string) => {

    if(articleID !== undefined){
        const articleFound = await AppDataSource.getRepository(Article).findOneBy({
            articleID: articleID
        })        
        if (!articleFound) throw new Error("There's no item on existence with that article number")
        return articleFound;
    }

    const articleFound = await AppDataSource.getRepository(Article).findOneBy({
        id: id
    })

    if (!articleFound) throw new Error('There is no article with that id')
    
    return articleFound;
}

export default getArticlesByIdController;
