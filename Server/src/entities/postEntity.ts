import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

export type CategoryPost = "hiking" | "camping" | "mountaineering" | "cycling" | "rock climbing" | "running"
export const types = ["hiking", "camping", "mountaineering", "cycling", "rock climbing", "running"]

@Entity()
export class Post {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
        type: "varchar",
        length: 50,
    })
    name: string

    @Column({
        type: "varchar",
        length: 500,
    })
    content: string

    @Column()
    image: string

    @Column({
        type: "enum",
        enum: types,
        default: "hiking"
    })
    role: CategoryPost

    @Column()
    active: boolean
}