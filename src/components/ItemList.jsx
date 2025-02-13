import React from 'react';
import SingleItem from './SingleItem';

const Itemlist = ({ title, items, itemsArray, path, idPath }) => {
  
  return (
    <div className="item-list">
            <div className='item-list__header'>
                <h2>{title} Populares</h2>
                <a href={path} className='item-list__link'>Mostrar tudo</a>
            </div>
    
            <div className="item-list__container">

              { itemsArray
              .filter((currentValue, index) => index < items)
              .map(
                (currentValue, index) => <SingleItem idPath={idPath} {...currentValue}/>
                )
              }


              {/* {items === 5 ? (
                <>
                  <SingleItem />
                  <SingleItem /> 
                  <SingleItem /> 
                  <SingleItem /> 
                  <SingleItem /> 
                </>
                ) : (
                  <>
                    <SingleItem />
                    <SingleItem /> 
                    <SingleItem /> 
                    <SingleItem /> 
                    <SingleItem /> 
                    <SingleItem />
                    <SingleItem /> 
                    <SingleItem /> 
                    <SingleItem /> 
                    <SingleItem /> 
                  </>
                )
                
              } */}
              
            </div>
    </div>
  );
}

export default Itemlist;
