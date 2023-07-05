import { Request, Response } from "express";
import getArticlesController from "../../controllers/articles/getArticlesController";
import getArticlesByNameController from "../../controllers/articles/getArticlesByNameController";


const getArticles = async (req:Request, res:Response) => {
    try{
        const nameFilter = req.query.name as string
        const genderFilter = req.query.gender as string
        const typeFilter = req.query.type as string
        const colorFilter = req.query.color as string
        const priceOrder = req.query.order as string
        const count = req.query.count as string

        const active = req.query.active;

        let activeBolean: boolean = true;
        if (active === 'false') activeBolean = false;
        
        let offset = req.query.offset as string
        let limit = req.query.limit as string
       
        if(!offset || offset < '0') offset='0'
        if(!limit || limit === '0')  limit= '12'

        if (nameFilter ||  genderFilter || typeFilter || colorFilter || !activeBolean) {
            const articlesFiltered = await getArticlesByNameController(nameFilter, genderFilter, typeFilter, colorFilter, activeBolean, +offset, +limit, priceOrder);
            return res.status(200).json(articlesFiltered)
        }

        const getArticlesRes = await getArticlesController(+offset, +limit,priceOrder,count);
        return res.status(200).json(getArticlesRes);
    
    } catch (error: any){
        res.status(500).send(error.message)
    }
}

export default getArticles;