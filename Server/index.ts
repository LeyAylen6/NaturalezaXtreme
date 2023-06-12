import server from './src/app.ts';
import { AppDataSource } from './src/db.ts';
const { PORT } = process.env

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        server.listen(PORT, () => {
            console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
        });
    })
    .catch((error) => console.log(error))

