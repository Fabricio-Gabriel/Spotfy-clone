import axios from 'axios';

const URL = 'http://localhost:3001';

const responseArtists = axios.get(`${URL}/artists`);
const responseSongs = axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
