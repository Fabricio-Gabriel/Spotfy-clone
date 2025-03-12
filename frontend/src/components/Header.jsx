import React from 'react';
import logoSpotfy from '../assets/imgs/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return <div className='header'>
    <Link to="/"><img src={ logoSpotfy } alt="Logo Spotfy" /></Link>

    <Link to="/" className='header__link'>
        <h1>Spotfy</h1>
    </Link>

  </div>
}

export default Header;
