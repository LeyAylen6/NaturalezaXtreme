import { Size } from "./sizeArticle"
import { Shoesize } from "./shoeSize"

export interface articleStructure {
    id: number,
    articleID: string,
    name: string,
    price: number,
    brand: string, 
    description: string,
    gender: string, 
    size: Size, 
    shoeSize: Shoesize,
    color: string, 
    stock?: number, 
    image: string, 
    type: string, 
    rating: any;
    comments: any, 
    active: boolean
}
