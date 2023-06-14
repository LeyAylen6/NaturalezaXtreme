import { Entity, PrimaryGeneratedColumn, Column,ManyToOne, OneToMany } from 'typeorm'
import{ User } from './userEntity'
import { Shopping_Cart_Article } from './shoppingCartArticleEntity'

export type CategoryCart = "pending" | "complet"  

@Entity()
export class Shopping_Cart {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
        type: "enum",
        enum: ["pending", "complet" ],
        default: "complet"
    })
    role: CategoryCart

    @ManyToOne(() => User, (user) => user.shoppingCart)
    user: User

    @OneToMany(() => Shopping_Cart_Article, shoppingArticle => shoppingArticle.shoppingCarts)
    public shoppingArticles: Shopping_Cart_Article[];


}