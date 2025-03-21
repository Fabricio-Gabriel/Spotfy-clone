import { artistArray } from '../../frontend/src/assets/database/artists.js';
import { songsArray } from '../../frontend/src/assets/database/songs.js';
import db from './connect.js';

const newArtistArray = artistArray.map((obj, index) => {
    const newArtistObj = {...obj};
    delete newArtistObj.id;

    return newArtistObj;
}); 


const newSongsArray = songsArray.map((obj, index) => {
    const newSongsObj = {...obj};
    delete newSongsObj.id;

    return newSongsObj;
}); 

async function insertMany(collection, newArray) {
    try {

        const insert = await db.collection(collection).insertMany(newArray);
        return insert;

    } catch (error) {
        console.log(error);
    }
}

insertMany("artists", newArtistArray);
insertMany("songs", newSongsArray);

console.log(newArtistArray);
console.log(newSongsArray);

