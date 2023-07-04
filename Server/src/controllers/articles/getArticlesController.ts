import { AppDataSource } from "../../db"
import { Article } from "../../entities/articleEntity";
const articleRepository = AppDataSource.getRepository(Article);
import { paginado } from "../../utils/paginado";



const getArticlesController = async(offset:number, limit:number, order:any,  countSale: any ) => {
    
    const count = await articleRepository.count();
        
    const articlesFounded = await articleRepository.find({
        order:{
            price: order,
            countSales: countSale
          },
        skip: offset,
        take: limit
    });
    
    const pag = paginado(offset,limit,count)

    if(!articlesFounded.length) throw new Error ("No hay articulos para mostar");
    return {...pag, articlesFounded};
}

export default getArticlesController;
