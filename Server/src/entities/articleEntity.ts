import { Entity, PrimaryGeneratedColumn, Column, Check, ManyToMany } from 'typeorm'
import { User } from './userEntity';

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

    @Column("int", { 
        array: true,
            nullable: true
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
        nullable: true,
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
    type: string

    @Column("boolean", {
        nullable: false,
    })
    active: boolean

    @ManyToMany(() => User, (user) => user.articles)
    users: User[]
}
