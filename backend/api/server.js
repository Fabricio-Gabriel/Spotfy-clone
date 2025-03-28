import express from 'express';
import cors from 'cors';
import db from './connect.js';
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = 3001;

app.use(cors());

// app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send("Olá, Mundo!");
});

app.get('/artists', async (req, res) => {
    try {

        res.send(await db.collection("artists").find({}).toArray());

    } catch(e) {
        res.status(404).send("Os artistas não foram encontrados");
    }
});

app.get('/songs', async (req, res) => {
    try {

        res.send(await db.collection("songs").find({}).toArray());
        
    } catch(e) {
        res.status(404).send("Os artistas não foram encontrados");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta http://localhost:${PORT}`);
});