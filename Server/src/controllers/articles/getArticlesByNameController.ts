import { Article } from "../../entities/articleEntity"
import { AppDataSource } from "../../db"
import { ILike } from "typeorm";
import { paginado } from "../../utils/paginado";

export interface FilterArticlesStructure {
    gender?: string,
    type?: string,
    color?: string
    
}

const getArticlesByNameController = async(name: string, gender: string, type:string, color: string, offset: number, limit: number) => {

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
        skip:offset,
        take: limit
      };

    const articlesFound = await AppDataSource.getRepository(Article).find(query);

    const pag = paginado(offset,limit,articlesFound.length)

    if (articlesFound.length === 0) throw new Error(`no matches were found for your search`)

    return{...pag, articlesFound};
}

export default getArticlesByNameController;