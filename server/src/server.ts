import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

function normalizePort(value: any) {
    const port = parseInt(value, 10)

    if (isNaN(port)) return value

    if (port >= 0) return port

    return false
}

const port = normalizePort(process.env.PORT || 3000)
app.listen(port, () => console.info(`ProffyAPI running on port:${port}`))