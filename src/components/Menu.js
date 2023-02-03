import React from 'react';
import Database from '../../Database.js';
import Items from './Items';
//Navbar should appear at bottom, closest to the users thumbs. Should NOT appear at the top.

const Menu = () => {
    const appetizers = Database.listApps(); // an array of objects
    return(
        <div className='menu'>
            {appetizers.map(item => <Items 
            engName={item.engName} 
            engDescription={item.engDescription} 
            korName={item.korName} 
            korDescription={item.korDescription} 
            price={item.price} 
            image={item.image}/>)}
        </div>
    )

};

export default Menu;