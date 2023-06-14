export type articleStructure = {
    id: number
    name: string
    price: number, 
    // rating: number[], 
    brand: string, 
    gender: string, 
    size: string, 
    shoeSize: number,
    color: string, 
    // comments: string[], 
    stock: number, 
    image: string, 
    type: string, 
    active: boolean
}

// ! NOTA: Comments y rating si se agregan como tipo array tira error. 
// No lo agrego a la interfase ya que en la DB esta como que puede ser null.