import React from 'react';
import Database from '../../Database.js';
import Items from './Items';
//Navbar should appear at bottom, closest to the users thumbs. Should NOT appear at the top.

const Menu = () => {
    const appetizers = Database.listApps(); // an array of objects
    return (
        <div className='menu'>

            <div id='apps' class="apps">
                <h1>Appetizers</h1>
                {appetizers.map(item => <Items className='apps'
                    engName={item.engName}
                    engDescription={item.engDescription}
                    korName={item.korName}
                    korDescription={item.korDescription}
                    price={item.price}
                    image={item.image} />)}
            </div>

            <div id='entrees' class="entrees">
                <h1>Entrees</h1>
                {appetizers.map(item => <Items className='entrees'
                    engName={item.engName}
                    engDescription={item.engDescription}
                    korName={item.korName}
                    korDescription={item.korDescription}
                    price={item.price}
                    image={item.image} />)}
            </div>

            <div id='family' class="family">
                <h1>Family Meals</h1>
                {appetizers.map(item => <Items className='family'
                    engName={item.engName}
                    engDescription={item.engDescription}
                    korName={item.korName}
                    korDescription={item.korDescription}
                    price={item.price}
                    image={item.image} />)}
            </div>

        </div>

    )

};

export default Menu;