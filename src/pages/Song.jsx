import React from 'react';
import Player from '../components/Player';
import { Link, useParams } from 'react-router-dom';
import { songsArray } from '../../database/songs';
import { artistArray } from '../../database/artists';

const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio, index } = songsArray.filter((currentSong, index) => currentSong.id === Number(id))[0];

  const artistObj = artistArray.filter((currentArtist, index) => currentArtist.name === artist)[0];

  return (
    <div className='song'>
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj.id}`} className="song__artist-image">
          <img src={artistObj.image} alt={`Imagem do artista ${artist}`} width={75} heigth={75}/>
        </Link>

        <Player duration={duration}/>

        <div className="">
          <p className='song__name'>{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  )
}

export default Song;
