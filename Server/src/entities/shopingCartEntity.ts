import { Entity, PrimaryGeneratedColumn, Column,ManyToOne } from 'typeorm'
import{ User } from './userEntity'

export type CategoryCart = "pending" | "complet"  

@Entity()
export class Shoping_Cart{
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
        type: "enum",
        enum: ["pending", "complet" ],
        default: "complet"
    })
    role: CategoryCart

    @ManyToOne(() => User, (user) => user.shopingCart)
    user: User
}