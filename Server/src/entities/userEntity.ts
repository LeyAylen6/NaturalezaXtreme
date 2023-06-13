import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm'
import { Article } from './articleEntity'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    lastname: string

    @Column({
        unique: true,
        length: 255,
        nullable: false
    })
    email: string

    @Column({
        length: 50,
        nullable: false
    })
    password: string

    @Column({
        length: 255,
        nullable: false
    })
    adress: string

    @Column({
        length: 50,
        nullable: false
    })
    city: number
    
    @Column({
        nullable: false
    })
    avatar: string

    @Column({
        length: 50,
        nullable: false
    })
    rol: number

    @Column({
        nullable: false
    })
    active: boolean

    @ManyToMany(() => Article, (article) => article.users)
    @JoinTable()
    articles: Article[]
}
