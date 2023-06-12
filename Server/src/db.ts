require('dotenv').config();
const { User } = require('./entities/userEntity')
import "reflect-metadata"
const { PASSWORD, USERNAME, DB_HOST } = process.env
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: 5432,
    username: USERNAME,
    password: PASSWORD,
    database: "NaturalezaXtreme",
    synchronize: true,
    logging: false,
    entities: [User],
    subscribers: [],
    migrations: [],
})


