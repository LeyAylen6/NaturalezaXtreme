import { Entity, PrimaryGeneratedColumn, Column, Check, ManyToMany, OneToMany, BaseEntity } from 'typeorm'
import { User } from './userEntity';
import { Shopping_Cart_Article } from './shoppingCart_ArticleEntity';
import { Size } from '../interfaces/sizeArticle';
import { Shoesize } from '../interfaces/shoeSize';


@Entity()

export class Article extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        unique: true,
        nullable: false
    })
    articleID: string

    @Column({
        type: "varchar",
        length: 80,
        nullable: false
    })
    name: string

    @Column({
        nullable: false
    })
    price: number

    @Column({
        type: "varchar",
        length: 50,
        nullable: true,
        default: true
    })
    brand: string = 'this product has no brand';
    
    @Column({
        type: "varchar",
        length: 500,
        nullable: true,
        default: true
    })
    description: string = 'this product has no description';

    @Column({
        enum: ['Male', 'Female', 'Unisex'], 
        nullable: false,
    })
    gender: string

    @Column({
        type: 'json',
        nullable: true,
        default: { XS:0, S: 0, M: 0, L: 0, XL: 0, U:0 },
    })
    size: Size;
    
    @Column({
        type: 'json',
        nullable: true,
        default: {35: 0,36: 0, 37: 0, 38: 0, 39: 0, 40: 0, 41: 0, 42: 0, 43: 0, 44: 0, 45: 0, 46: 0,},
    })
    shoeSize: Shoesize;

    @Column({
        enum: ['White', 'Black', 'Red', 'Green', 'Yellow', 'Brown', 'Orange', 'Blue', 'Grey', 'Pink', 'Violet'], 
        nullable: false,
    })
    color: string

    @Column({
        nullable: false,
        type: "varchar",
        length: 2088,
    })
    image: string

    @Column("enum", { 
        enum: ['Tshirt', 'sweatshirt', 'jacket', 'pant', 'accesories', 'shoes', 'equipment'], 
        nullable: false,
    })
    type: string

    @Column('integer', {
        array: true,
        nullable: true,
    })
    rating: number[];

    @Column('simple-array', { 
        nullable: true 
    })
    comments: string[];

    @Column("boolean", {
        nullable: false,
    })
    active: boolean

    @ManyToMany(() => User, (user) => user.articles)
    users: User[]

    @OneToMany(() => Shopping_Cart_Article, (shoppingArticle) => shoppingArticle.article)

    shoppingArticles: Shopping_Cart_Article[];
}
