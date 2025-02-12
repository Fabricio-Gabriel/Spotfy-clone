import React from 'react';

const main = () => {
  return (
  <div className="main">
    <div className="item-list">
        <div className='item-list__header'>
            <h2>Artistas Popolares</h2>
            <a href="/" className='item-list__link'>Mostrar tudo</a>
        </div>

        <div className="single-item">
            <img src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="imgem Henrique & Juliano" className="single-item__image" />
            <p>Henrique & Juliano</p>
            <p>Artista</p>
            
        </div>
    </div>
  </div>
  );
}

export default main
