require('dotenv').config();
import "reflect-metadata"
const { DB_PASSWORD, DB_USER, DB_HOST } = process.env
import { DataSource } from "typeorm"
import { User } from "./entities/userEntity";
import { Post } from "./entities/postEntity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: 5432,
    username: DB_USER,
    password: DB_PASSWORD,
    database: "NaturalezaXtreme",
    synchronize: true,
    logging: false,
    entities: [User, Post],
    subscribers: [],
    migrations: [],
})


