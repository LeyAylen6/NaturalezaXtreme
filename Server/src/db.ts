require('dotenv').config();

import { User } from './entities/userEntity';
import { Article } from './entities/articleEntity';
import { Post } from "./entities/postEntity";
import { Shopping_Cart } from "./entities/shoppingCartEntity";
import "reflect-metadata"
import { Shopping_Cart_Article } from './entities/shoppingCart_ArticleEntity';
const { DB_PORT, DB_PASSWORD, DB_USER, DB_HOST, DB_NAME_PROJECT } = process.env

import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME_PROJECT,
    synchronize: true,
    logging: false,
    entities: [User, Article, Post, Shopping_Cart, Shopping_Cart_Article],
    subscribers: [],
    migrations: [],
})


