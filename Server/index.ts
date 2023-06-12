import server from './src/app.ts';
// import { conn } from './src/db.ts';
const { PORT } = process.env

// conn.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
        console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
    });
// });
