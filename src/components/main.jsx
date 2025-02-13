import React from 'react';
import ItemList from './ItemList';

const Main = () => {
  return (
  <div className="main">
    {/* item List de artistas */}
    <ItemList title="Artistas" items={5}/>

    {/* item List de Musicas */}
    <ItemList title="Músicas" item={10}/>

  </div>
  );
}

export default Main;
