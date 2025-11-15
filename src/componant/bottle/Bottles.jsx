import React, { use, useEffect, useState } from 'react';
import Bottle from './bottle';
import './Bottle.css'
import { addToStoredCart, getStoreCart } from './utilities/localStorage';

const Bottles = ({bottlesPromis}) => {
    // console.log(bottles)
    const [cart,setCart]=useState([]);
    const bottles =use(bottlesPromis);
    // use effect
    useEffect(()=>{
        const storedCartIds=getStoreCart();
        console.log(storedCartIds,bottles);
        
        const storedCart=[];

        for(const id of storedCartIds){
            console.log(id);
            const cartBottle=bottles.find(bottle=>bottle.id === id)
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }
        console.log('stored cart',storedCart);
        setCart(storedCart);
    },[bottles])

    const handleAddToCart=(bottle)=>{
        // console.log('product added to the  cart',bottle);
        // eta holo cart a product count kora ba add kora
        const newcart=[...cart,bottle];
        setCart(newcart);

        // save the bottle id in the storage
        addToStoredCart(bottle.id);

    }
    return (
        <div >
            <h3>Bottle : {bottles.length}</h3>
            <p>CART ITEMS : {cart.length} </p>
           <div className='bottlesContainer'>
             {
                bottles.map(bottle => <Bottle key={bottle.id}
                    handleAddToCart={handleAddToCart}
                     bottle={bottle}></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;