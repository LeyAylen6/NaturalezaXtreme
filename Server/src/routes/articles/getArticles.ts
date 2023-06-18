import { Request, Response } from "express";
import getArticlesController from "../../controllers/articles/getArticlesController";
import getArticlesByNameController from "../../controllers/articles/getArticlesByNameController";


const getArticles = async (req:Request, res:Response) => {
// const getArticles = async ({query}:Request, res:Response) => {
    try{
        const nameFilter = req.query.name as string
        const genderFilter = req.query.gender as string
        const typeFilter = req.query.type as string
        const colorFilter = req.query.color as string
        const priceOrder = req.query.order as string
        
        let offset = req.query.offset as string
        let limit = req.query.limit as string
       
        if(!offset || offset < '0') offset='0'
        if(!limit || limit === '0')  limit= '12'

        if (nameFilter ||  genderFilter || typeFilter || colorFilter) {
            // const articleByName = await getArticlesByNameController(nameFilter, genderFilter, typeFilter, colorFilter,+offset,+limit, priceOrder);
            const articleByName = await getArticlesByNameController(nameFilter, genderFilter, typeFilter, colorFilter,+offset,+limit, priceOrder);
            return res.status(200).json(articleByName)
        }

        const getArticlesRes = await getArticlesController(+offset, +limit,priceOrder);
        return res.status(200).json(getArticlesRes);
    
    } catch (error: any){
        if (error.message === `no matches were found for your search`) {
            return res.status(404).send(error.message)  
        }
        res.status(400).send(error.message)
    }
}

export default getArticles;