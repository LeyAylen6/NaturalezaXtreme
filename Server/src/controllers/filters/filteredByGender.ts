import { Article } from "../../entities/articleEntity";

const filteredByGender = async (genderFilter: string)=>{

    const filteredByGender = await Article.findBy({
        gender: genderFilter,
    })
    
    if(filteredByGender.length === 0) throw new Error ("No hay articulos para mostar");
    return filteredByGender;
}

export default filteredByGender;