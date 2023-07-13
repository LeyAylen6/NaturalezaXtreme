require('dotenv').config();

import { User } from './entities/userEntity';
import { Article } from './entities/articleEntity';
import { Post } from "./entities/postEntity";
import { Shopping_Cart } from "./entities/shoppingCartEntity";
import "reflect-metadata"
import { Shopping_Cart_Article } from './entities/shoppingCart_ArticleEntity';

import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_PROJECT,
    synchronize: true,
    logging: false,
    entities: [User, Article, Post, Shopping_Cart, Shopping_Cart_Article],
    subscribers: [],
    migrations: [],
})


