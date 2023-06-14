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
    price: number

    @Column('integer', {
        array: true,
        nullable: true,
    })
    rating: number[];

    @Column({
        type: "varchar",
        length: 50,
        nullable: true,
        default: true
    })
    brand: string = 'this product has no brand';
    
    @Column({
        enum: ['Male', 'Female'], 
        nullable: false,
    })
    gender: string

    @Column({
        enum: ['S', 'M', 'L', 'XL', 'Unique'], 
        nullable: true,
    })
    size: string
    
    @Column({
        enum: [35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46], 
        nullable: true,
    })
    shoeSize: number

    @Column({
        enum: ['White', 'Black', 'Red', 'Green', 'Yellow', 'Brown', 'Orange', 'Blue', 'Grey', 'Pink'], 
        nullable: false,
    })
    color: string

    @Column('simple-array', { nullable: true })
    comments: string[];

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
        enum: ['Tshirt', 'sweater', 'jacket', 'pant', 'accesories', 'shoes', 'equipment'], 
        nullable: false,
    })
    type: string

    @Column("boolean", {
        nullable: false,
    })
    active: boolean

    @ManyToMany(() => User, (user) => user.articles)
    users: User[]

    @OneToMany(() => Shopping_Cart_Article, shoppingArticle => shoppingArticle.articles)
    public shoppingArticles: Shopping_Cart_Article[];
}
