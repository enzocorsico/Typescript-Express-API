import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import clientRouter from './routers/client.router';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors({
    origin: true,
    credentials: true,
    methods: ['GET'],
}));

app.use("/client", clientRouter)

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});