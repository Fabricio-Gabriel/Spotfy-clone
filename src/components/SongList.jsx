import React from 'react';
import SongItems from './SongItems';
import { useState } from 'react';


const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);
  console.log(items);
  
  

  return (
    <div className='song-list'>

      {songsArray
      .filter((item, index) => index < items)
      .map((currentSongObj, index) => <SongItems {...currentSongObj} index={index} key={index}/>)}

      <p className='song-list__see-more' onClick={() => {
        setItems(items + 5);
      }}>Ver mais</p>
    </div>
  )
}

export default SongList;
