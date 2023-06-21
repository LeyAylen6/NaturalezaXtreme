import { Entity, PrimaryGeneratedColumn, Column,ManyToOne } from 'typeorm'
import { Shopping_Cart } from './shoppingCartEntity'
import { Article } from './articleEntity' 

@Entity()
export class Shopping_Cart_Article {
    
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public articleId: number

    @Column()
    public userId: number

    @Column()
    public quantity: number

    @ManyToOne(() => Shopping_Cart, (shoppingCart) => shoppingCart.shoppingArticles)
    public shoppingCarts: Shopping_Cart

    @ManyToOne(() => Article, (article) => article.shoppingArticles)
    public articles: Article
}