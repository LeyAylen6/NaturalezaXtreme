import { Request, Response } from "express";
import filteredBy from "../../controllers/filters/filteredBy";
import { IntegerType } from "typeorm";


const filtered = async (req: Request, res: Response) => {

    const genderFilter = req.query.gender as string
    const typeFilter = req.query.type as string
    const colorFilter = req.query.color as string

    try{
        const filtered = await filteredBy(genderFilter, typeFilter, colorFilter);
        res.status(200).json(filtered);
    }
    
    catch (error: any){
        if (error.message === `no matches were found for your search`) {
            return res.status(404).send(error.message)  
        }
        res.status(400).send(error.message)
    } 
}

export default filtered;