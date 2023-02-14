import React, { useRef } from 'react';
import { LanguageSelect } from '.'

const Navbar = () => {
    return (
        <nav>
            <ul class="full-width">
                <li class="apps">
                    <a href="#apps" class="apps">Apps</a>
                </li>
                <li  class="entrees">
                    <a href="#entrees" class="entrees">Entrees</a>
                </li>
                <li class="family">
                    <a href="#family" class="family">Family Meals</a>
                </li>
                <li>
                    <LanguageSelect/>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;