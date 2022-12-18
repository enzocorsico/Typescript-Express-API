import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { produitRouter } from './routers/produit.router';
import { categorieRouter } from './routers/categorie.router';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors({
    origin: true,
    credentials: true,
    methods: ['GET'],
}));

app.use("/categorie", categorieRouter)
app.use("/produit", produitRouter)

app.listen(port, () => {
    console.log(`Listening on \x1b[32mhttp://localhost:${port}\x1b[0m`);
});