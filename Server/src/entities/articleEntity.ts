import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    price!: string

    @Column("int", { array: true })
    rating!: number[];

    @Column()
    brand!: string

    @Column()
    gender!: string

    @Column()
    size!: number

    @Column()
    color!: string

    @Column({array: true})
    comments!: string;

    @Column()
    stock!: number

    @Column()
    image!: string

    @Column("enum", { enum: ['all', 'Tshirt', 'sweater', 'jacket'] })
    enum!: string
    

    @Column("boolean")
    active!: boolean
}
