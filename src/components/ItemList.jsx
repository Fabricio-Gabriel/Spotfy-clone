import React from 'react';
import SingleItem from './SingleItem';

const Itemlist = ({ title, items }) => {
  console.log(items);
  
  return (
    <div className="item-list">
            <div className='item-list__header'>
                <h2>{title} Populares</h2>
                <a href="/" className='item-list__link'>Mostrar tudo</a>
            </div>
    
            <div className="item-list__container">
              {items === 5 ? (
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
                
              }
              
              {/* <SingleItem />
    
              <SingleItem />

              <SingleItem />
              
              <SingleItem />

              <SingleItem />

              <SingleItem />

              <SingleItem />

              <SingleItem /> */}
    
            </div>
    </div>
  );
}

export default Itemlist;
