import { Article } from "../../entities/articleEntity"
import { AppDataSource } from "../../db"
import { ILike } from "typeorm";

export interface FilterArticlesStructure {
    gender?: string,
    type?: string,
    color?: string
}

const getArticlesByNameController = async(name: string, gender: string, type:string, color: string) => {

    const filters: FilterArticlesStructure = {}
    if(gender) filters.gender = gender;
    if(type) filters.type = type;
    if(color) filters.color = color;
    console.log(color)

    const query = {
        where: {
          name: ILike(`%${name}%`),
          ...filters, // Agrega los filtros al objeto de búsqueda
        },
      };

    const articlesFound = await AppDataSource.getRepository(Article).find(query);

    if (articlesFound.length === 0) throw new Error(`no matches were found for your search`)

    return articlesFound;
}

export default getArticlesByNameController;