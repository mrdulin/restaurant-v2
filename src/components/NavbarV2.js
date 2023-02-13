import React, {useRef} from 'react';

const Navbar = () => {
    return (
        <nav>
            <ul class="full-width">
                <li>
                    <a href="#apps">Apps</a>
                </li>
                <li>
                    <a href="#entrees">Entrees</a>
                </li>
                <li>
                    <a href="#family">Family Meals</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;