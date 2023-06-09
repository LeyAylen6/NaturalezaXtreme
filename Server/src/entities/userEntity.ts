
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany, BaseEntity } from 'typeorm'
import { Article } from './articleEntity'
import { Shopping_Cart } from './shoppingCartEntity'

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({        
        nullable: true
    })
    name: string

    @Column({        
        nullable: true
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
        length: 50,
        nullable: false
    })
    password: string

    @Column({
        type: "varchar",
        length: 50,
        nullable: true
    })
    adress: string

    @Column({
        type: "varchar",
        length: 20,
        nullable: true
    })
    city: string
    
    @Column()
    avatar: string = "https://cdn-icons-png.flaticon.com/512/3237/3237447.png"

    @Column({
        enum: ['User', 'Admin'], 
        nullable: true,
    })
    rol: string

    @Column({
        nullable: true
    })
    active: boolean

    @ManyToMany(() => Article, (article) => article.users)
    @JoinTable()
    articles: Article[]

    @OneToMany(() => Shopping_Cart, (shoppingCart) => shoppingCart.user)
    shoppingCart: Shopping_Cart[]
}


