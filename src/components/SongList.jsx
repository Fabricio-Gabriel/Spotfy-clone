import React from 'react';
import SongItems from './SongItems';


const SongList = ({ songsArray }) => {
  const items = 5;

  return (
    <div className='song-list'>

      {songsArray
      .filter((item, index) => index < items)
      .map((currentSongObj, index) => <SongItems {...currentSongObj} index={index} key={index}/>)}

      <p className='song-list__see-more '>Ver mais</p>
    </div>
  )
}

export default SongList;
