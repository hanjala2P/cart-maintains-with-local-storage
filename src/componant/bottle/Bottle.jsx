import React from 'react';
import './Bottle.css'

const Bottle = ({bottle,handleAddToCart}) => {
    const {id,image,name,price,brand,alt}=bottle;
    // console.log(bottle);
    
    return (
        <div className='card'>
           <p>ID : {id}</p>
           <h2>Name : {name}</h2>
           <h2>Name : {price}</h2>
           <img className='ing' src={image} alt={alt} />
           <p> Brand : {brand}</p>
           <button onClick={()=>handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;