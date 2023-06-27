import { Article } from "../entities/articleEntity"

export interface userStructure {
    id: number,
    name: string,
    lastname: string,
    email: string,
    password: string,
    adress: string,
    city: string,
    avatar: string,
    rol: string,
    active: boolean
    articles?: Article[]
}