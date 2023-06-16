import { Article } from "../../entities/articleEntity"
import { AppDataSource } from "../../db"
import { ILike } from "typeorm";

export interface FilterArticlesStructure {
    name?: any,
    gender?: string,
    type?: string,
    color?: string
}

const getArticlesByNameController = async(name: string, gender: string, type:string, color: string) => {

    const filters: FilterArticlesStructure = {}
    if (name) filters.name = ILike(`%${name}%`);
    if(gender) filters.gender = gender;
    if(type) filters.type = type;
    if(color) filters.color = color;

    const query = {
        where: {
          ...filters, 
        },
      };

    const articlesFound = await AppDataSource.getRepository(Article).find(query);

    if (articlesFound.length === 0) throw new Error(`no matches were found for your search`)

    return articlesFound;
}

export default getArticlesByNameController;
