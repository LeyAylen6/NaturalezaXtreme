import { Article } from "../../entities/articleEntity"
import { AppDataSource } from "../../db"
import { ILike } from "typeorm";
import { paginado } from "../../utils/paginado";
import { FilterArticlesStructure } from "../../interfaces/filterArticleStructure";

const getArticlesByNameController = async(name: string, gender: string, type: string, color: string, active: boolean, offset: number, limit: number, order: any) => {
  
  const filters: FilterArticlesStructure = {}
  if(name) filters.name = ILike(`%${name}%`);
  if(gender) filters.gender = gender;
  if(type) filters.type = type;
  if(color) filters.color = color;
  if(active !== undefined) filters.active = active;

    const query = {
        where: {
          ...filters, 
        },
        skip:offset,
        take: limit,
        order:{
          price: order
        }
      };

    const articlesFound = await AppDataSource.getRepository(Article).find(query);

    const pag = paginado(offset, limit, articlesFound.length)

    if (articlesFound.length === 0) throw new Error(`no matches were found for your search`)

    return{...pag, articlesFound};
}

export default getArticlesByNameController;
