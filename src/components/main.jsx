import React from 'react';
import ItemList from './ItemList';
import { artistArray } from '../../database/artists';
import { songsArray } from '../../database/songs';

const Main = () => {
  return (
  <div className="main">
    {/* item List de artistas */}
    <ItemList title="Artistas" items={7} itemsArray={artistArray} path="/artists" idPath="/artist"/>

    {/* item List de Musicas */}
    <ItemList title="Músicas" items={15} itemsArray={songsArray} path="/songs" idPath="/song"/>

  </div>
  );
}

export default Main;
