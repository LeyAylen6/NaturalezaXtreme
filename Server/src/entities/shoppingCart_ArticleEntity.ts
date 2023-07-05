import { Entity, PrimaryGeneratedColumn, Column,ManyToOne, JoinTable } from 'typeorm'
import { Shopping_Cart } from './shoppingCartEntity'
import { Article } from './articleEntity' 

@Entity()
export class Shopping_Cart_Article {
    
    @PrimaryGeneratedColumn()
    public id?: number

    @Column()
    public quantity: number

    @Column()
    public size: string

    @ManyToOne(() => Shopping_Cart, (shoppingCart) => shoppingCart.shoppingArticles)
    public shoppingCart: Shopping_Cart

    @ManyToOne(() => Article, (article) => article.shoppingArticles)
    public article: Article
}