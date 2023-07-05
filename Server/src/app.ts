import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import express, { Request, Response, NextFunction } from "express";
import fileUpload from 'express-fileupload';
const server = express();
import router from './routes/index'


require('./db.ts');

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

server.use(fileUpload({
  useTempFiles: true
}))

server.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


server.use('/', router)

// Error catching endware.
// server.use((err: Error, req: Request, res: Response, next: NextFunction) => { // eslint-disable-line no-unused-vars
//     const message = err.message || err;
//     console.error(err);
//     res.status(500).send(message);


// });
  
export default server;