import { Article } from "../../entities/articleEntity"
import { AppDataSource } from "../../db"
import { ILike } from "typeorm";
import { paginado } from "../../utils/paginado";

export interface FilterArticlesStructure {
    name?: any,
    gender?: string,
    type?: string,
    color?: string
    
}

const getArticlesByNameController = async(name: string, gender: string, type:string, color: string, offset: number, limit: number, order: any) => {

    const filters: FilterArticlesStructure = {}
    if (name) filters.name = ILike(`%${name}%`);
    if(gender) filters.gender = gender;
    if(type) filters.type = type;
    if(color) filters.color = color;

    const query = {
        where: {
          ...filters, 
        },
        skip:offset,
        take: limit
      };

    const articlesFound = await AppDataSource.getRepository(Article).find({...query,
      order:{
        price: order
      }
    });

    const pag = paginado(offset,limit,articlesFound.length)

    if (articlesFound.length === 0) throw new Error(`no matches were found for your search`)

    return{...pag, articlesFound};
}

export default getArticlesByNameController;
