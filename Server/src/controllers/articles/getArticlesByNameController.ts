import { Article } from "../../entities/articleEntity"
import { AppDataSource } from "../../db"
import { ILike } from "typeorm";
import { paginado } from "../../utils/paginado";

const getArticlesByNameController = async(name: string,offset:number, limit:number) => {

    const articlesFound = await AppDataSource.getRepository(Article).find({ 
        where: {
            name: ILike(`%${name}%`)
        },
        skip:offset,
        take:limit
    });
    const pag = paginado(offset,limit,articlesFound.length)

    if (articlesFound.length === 0) throw new Error(`no matches were found for your search`)

    return{...pag, articlesFound};
}

export default getArticlesByNameController;