import { Size } from "./sizeArticle"
import { Shoesize } from "./shoeSize"

export interface articleStructure {
    id: number
    name: string
    price: number,
    brand: string, 
    gender: string, 
    size: Size, 
    shoeSize: Shoesize,
    color: string, 
    stock: number, 
    image: string, 
    type: string, 
    // rating: number;
    // comments: string, 
    active: boolean
}

// ! NOTA: Comments y rating si se agregan como tipo array tira error. 
// No lo agrego a la interfase ya que en la DB esta como que puede ser null.