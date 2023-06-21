import { Entity, PrimaryGeneratedColumn, Column,ManyToOne, OneToMany } from 'typeorm'
import{ User } from './userEntity'
import { Shopping_Cart_Article } from './shoppingCart_ArticleEntity'
import { CategoryCart } from '../interfaces/categoryCart'

@Entity()
export class Shopping_Cart {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
        type: "enum",
        enum: ["pending", "complete" ],
        default: "complete"
    })
    status: CategoryCart

    @Column()
    userId: number

    @ManyToOne(() => User, (user) => user.shoppingCart)
    user: User

    @OneToMany(() => Shopping_Cart_Article, shoppingArticle => shoppingArticle.shoppingCartId)
    public shoppingArticles: Shopping_Cart_Article[];
}