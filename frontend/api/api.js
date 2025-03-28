import axios from 'axios';

const URL = 'http://localhost:3001';

const responseArtists = await axios(`${URL}/artists`);
const responseSongs = await axios(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

console.log(responseSongs.data);

