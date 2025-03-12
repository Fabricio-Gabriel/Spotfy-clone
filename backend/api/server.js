import express from 'express';
import { artistArray } from '../../frontend/src/assets/database/artists.js';
import { songsArray } from '../../frontend/src/assets/database/songs.js';


const app = express();
const PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send("Olá, Mundo!");
});

app.get('/artists', (req, res) => {
    res.send(artistArray);
});

app.get('/songs', (req, res) => {
    res.send(songsArray);
});

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta http://localhost:${PORT}`);
});