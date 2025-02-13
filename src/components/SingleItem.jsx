import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const SingleItem = (props) => {
    const imageArtist = props.image; 
    const nameArtist = props.name;
    const musicNameArtist = props.artist || 'Artista';
    const idArtist = props.id;
    const idPath = props.idPath;


  return (

    <a href={`${idPath}/${idArtist}`} className="single-item">
        <div className="single-item__div-image-button">
            <div className="single-item__div-image">
                <img src={imageArtist} alt={`Imagem ${nameArtist}`} className="single-item__image" />
            </div>
                        
            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
        </div>
        <div className="single-item__texts">
            <div className="single-item__2lines">
                <p className='single-item__title'>{nameArtist}</p>
            </div>
            <p className='single-item__type'>{musicNameArtist}</p>
        </div>
    </a>

  );
}

export default SingleItem
