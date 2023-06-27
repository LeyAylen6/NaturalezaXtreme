import { Request, Response } from "express";
import commentPurchesed from "../../controllers/shoppingCart/commentPurchased";

const reviewCarts = async (req: Request, res: Response) => {
    const userId = req.params;
    
    try {
        const purchasedArticles = await commentPurchesed(Number(userId));

        res.status(200).json(purchasedArticles);
    
    //revisar errores controlador
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}

export default reviewCarts;