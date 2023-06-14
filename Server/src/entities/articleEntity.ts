import { Entity, PrimaryGeneratedColumn, Column, Check, ManyToMany, OneToMany } from 'typeorm'
import { User } from './userEntity';
import { Shopping_Cart_Article } from './shoppingCartArticleEntity';

@Entity()
// @Check('"string" > 0')
// @Check('"rating" > 0' && '"rating" <= 5')

export class Article {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    name: string

    @Column({
        nullable: false
    })
    price: string

    @Column("int", { array: true })
    rating: number[];

    @Column({
        type: "varchar",
        length: 50,
        nullable: true,
        default: true
    })
    brand: string = 'this product has no brand';
    
    @Column({
        nullable: false,
    })
    gender: string

    @Column({
        nullable: false,
    })
    size: number

    @Column({
        nullable: false,
    })
    color: string

    @Column({
        nullable: false,
        array: true
    })
    comments: string;

    @Column({
        nullable: false,
    })
    stock: number

    @Column({
        nullable: false,
        type: "varchar",
        length: 2088,
    })
    image: string

    @Column("enum", { 
        enum: ['Tshirt', 'sweater', 'jacket'], 
        nullable: false,
    })
    enum: string

    @Column("boolean", {
        nullable: false,
    })
    active: boolean

    @ManyToMany(() => User, (user) => user.articles)
    users: User[]

    @OneToMany(() => Shopping_Cart_Article, shoppingArticle => shoppingArticle.articles)
    public shoppingArticles: Shopping_Cart_Article[];

}
