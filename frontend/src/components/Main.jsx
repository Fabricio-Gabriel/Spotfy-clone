import React from 'react';
import ItemList from './ItemList';
import { songsArray } from '../assets/database/songs';
import { artistArray } from '../assets/database/artists';

const Main = ({ type }) => {
  return (
  <div className="main">

    {/* item List de artistas */}
    {
    type === "artists" || type === undefined ? (
      <ItemList 
        title="Artistas" 
        items={7} 
        itemsArray={artistArray} 
        path="/artists" 
        idPath="/artist"
      />
    ) : (
      <></>
    )
    }


    {/* item List de Musicas */}
    {
      type === "songs"  || type === undefined ? (
        <ItemList 
          title="Músicas" 
          items={15} 
          itemsArray={songsArray} 
          path="/songs" 
          idPath="/song"
        />
      ) : (
        <></>
      )
    }
    

  </div>
  );
}

export default Main;
