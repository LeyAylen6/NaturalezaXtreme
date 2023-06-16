import { Article } from "../../entities/articleEntity";


export interface FilterArticlesStructure {
    gender?: string,
    type?: string,
    color?: string
}

const filteredBy = async (gender: string, type: string, color: string)=>{

    const filters: FilterArticlesStructure = {}
    if(gender) filters.gender = gender;
    if(type) filters.type = type;
    if(color) filters.color = color;

    const filteredArticles = await Article.find({ where: filters });
          
    if(filteredArticles.length === 0) throw new Error ("No hay articulos para mostar");
    return filteredArticles;
}

export default filteredBy;