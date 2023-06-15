import { Request, Response } from "express";
import filteredByGender from "../../controllers/filters/filteredByGender";


const filterByGender = async (req: Request, res: Response) => {

    const genderFilter = req.query.gender as string

    try{
        const filtered = await filteredByGender(genderFilter);
        res.status(200).json(filtered);
    } 
    
    catch (error: any){
        if (error.message === `no matches were found for your search`) {
            return res.status(404).send(error.message)  
        }
        res.status(400).send(error.message)
    } 
}

export default filterByGender;