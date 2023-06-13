require('dotenv').config();
import "reflect-metadata"
const { DB_PORT, DB_PASSWORD, DB_USER, DB_HOST, DB_NAME_PROJECT } = process.env
import { DataSource } from "typeorm"
import { User } from "./entities/userEntity";
import { Post } from "./entities/postEntity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME_PROJECT,
    synchronize: true,
    logging: false,
    entities: [User, Post],
    subscribers: [],
    migrations: [],
})


