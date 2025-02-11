import React from 'react'
import logoSpotfy from '../assets/imgs/logo.png'

const Header = () => {
  return <div className='header'>
    <img src={ logoSpotfy } alt="Logo Spotfy" />

    <a href="/" className='header__link'>
        <h1>Spotfy</h1>
    </a>

  </div>
}

export default Header
