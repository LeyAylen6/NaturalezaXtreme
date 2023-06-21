import { Entity, PrimaryGeneratedColumn, Column,ManyToOne, JoinTable } from 'typeorm'
import { Shopping_Cart } from './shoppingCartEntity'
import { Article } from './articleEntity' 

@Entity()
export class Shopping_Cart_Article {
    
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public quantity: number

    @ManyToOne(() => Shopping_Cart, (shoppingCart) => shoppingCart.shoppingArticles)
    public shoppingCartId: Shopping_Cart

    @ManyToOne(() => Article, (article) => article.shoppingArticles)
    public article: Article
}