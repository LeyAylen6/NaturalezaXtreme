require('dotenv').config();
const { User } = require('./entities/userEntity')
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "070118",
    database: "NaturalezaXtreme",
    synchronize: true,
    logging: false,
    entities: [User],
    subscribers: [],
    migrations: [],
})


