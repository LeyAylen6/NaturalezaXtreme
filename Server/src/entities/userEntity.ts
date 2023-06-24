import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany, BaseEntity } from 'typeorm'
import { Article } from './articleEntity'
import { Shopping_Cart } from './shoppingCartEntity'

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({        
        nullable: false
    })
    name: string

    @Column({        
        nullable: false
    })
    lastname: string

    @Column({
        unique: true,
        type: "varchar",
        length: 255,
        nullable: false
    })
    email: string

    @Column({
        type: "varchar",
        length: 25,
        nullable: false
    })
    password: string

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    adress: string

    @Column({
        type: "varchar",
        length: 20,
        nullable: false
    })
    city: string
    
    @Column()
    avatar: string = "https://cdn-icons-png.flaticon.com/512/3237/3237447.png"

    @Column({
        enum: ['User', 'Admin'], 
        nullable: false,
    })
    rol: string

    @Column({
        nullable: false
    })
    active: boolean

    @ManyToMany(() => Article, (article) => article.users)
    @JoinTable()
    articles: Article[]

    @OneToMany(() => Shopping_Cart, (shoppingCart) => shoppingCart.user)
    shoppingCart: Shopping_Cart[]
}
