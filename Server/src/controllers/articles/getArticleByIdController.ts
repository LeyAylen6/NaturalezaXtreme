import { AppDataSource } from "../../db";
import { Article } from "../../entities/articleEntity"

const getArticlesByIdController = async(id: number, articleID?: string) => {

    // let articleData: {
    //     id: number;
    //     message: string;
    // };    

    if(articleID !== undefined){
        const articleFound = await Article.findOneBy({
            articleID: articleID
        })        
        
        if (!articleFound) throw new Error("There's no item on existence with that article number")
        //En caso de enviar algo como lo de abajo hay que modificar los controladores de update y deactivate
        // articleData = {id: articleFound.id, message: "The article is on existence"}
        // return articleData;
        return articleFound
    }

    const articleFound = await Article.findOneBy({
        id: id
    })

    if (!articleFound) throw new Error('There is no article with that id')
    return articleFound;
}

export default getArticlesByIdController;
