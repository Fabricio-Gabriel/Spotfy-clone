import React from 'react';
import Player from '../components/Player';
import { Link, useParams } from 'react-router-dom';
import { songsArray } from '../../database/songs';

const Song = () => {
  const { id } = useParams();

  const songObj = songsArray.filter((currentSong, index) => currentSong.id === Number(id))[0];

  console.log(songObj);
  


  return (
    <div className='song'>
      <div className="song__container">
        <div className="song__image-container">
          <img src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24" alt="imagem musica x" />
        </div>
      </div>

      <div className="song__bar">
        <Link to="/artist/1" className="song__artist-image">
          <img src="https://i.scdn.co/image/ab6761610000517499c26e8fb91634b00764bbb9" alt="imagem do artista y" width={75} heiLink={75}/>
        </Link>

        <Player />

        <div className="">
          <p className='song__name'>Última Saudade - Ao Vivo</p>
          <p>Henrique & Juliano</p>
        </div>
      </div>
    </div>
  )
}

export default Song;
