import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    lastname!: string

    @Column()
    password!: string

    @Column()
    adress!: string

    @Column()
    city!: number
    
    @Column()
    avatar!: string

    @Column()
    rol!: number

    @Column()
    active!: boolean
}
 
// Agregaria username, birthday and 
// disabled se enteria mejor si fuera activated = si o no. o Similar.