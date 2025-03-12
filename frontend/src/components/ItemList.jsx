import React from 'react';
import SingleItem from './SingleItem';
import { Link, useLocation } from 'react-router-dom';

const Itemlist = ({ title, items, itemsArray, path, idPath }) => {
  console.log(useLocation());
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  

  return (
    <div className="item-list">
            <div className='item-list__header'>
                <h2>{title} Populares</h2>
                {
                  isHome ? (<Link to={path} className='item-list__link'>Mostrar tudo</Link>) : <></>
                }
            </div>
    
            <div className="item-list__container">

              { !isHome ? (itemsArray
                  .map(
                    (currentValue, index) => <SingleItem idPath={idPath} {...currentValue}/>
                )) : (itemsArray
                  .filter(
                    (currentValue, index) => index < items)
                  .map(
                    (currentValue, index) => <SingleItem idPath={idPath} {...currentValue}/>
                  )
                )
              }
              
            </div>
    </div>
  );
}

export default Itemlist;
