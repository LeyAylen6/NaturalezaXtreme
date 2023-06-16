import { Request, Response } from "express";
import getArticlesController from "../../controllers/articles/getArticlesController";
import getArticlesByNameController from "../../controllers/articles/getArticlesByNameController";


const getArticles = async ({query}:Request, res:Response) => {
    try{
        const { name} = query;
        let {offset, limit } = query
        
        if(!offset) offset='0'
        if(!limit || limit === '0')  limit= '10'

        if (name) {
            
            if (typeof name !== "string" ) {
                throw new Error("Search for a valid product, Example: Jacket");
            }
            const articleByName = await getArticlesByNameController(name, +offset,+limit);
            return res.status(200).json(articleByName)
        }




            const getArticlesRes = await getArticlesController(+offset, +limit);
            return res.status(200).json(getArticlesRes)

    
         



    
    } catch (error: any){
        if (error.message === `no matches were found for your search`) {
            return res.status(404).send(error.message)  
        }
        res.status(400).send(error.message)
    }
}


export default getArticles;