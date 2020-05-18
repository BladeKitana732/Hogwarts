import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>

        <ul id="navBar" >

            <li><NavLink className= "navLinks" to="/Home">
                Home Navlink
            </NavLink></li>

            <li><NavLink className= "navLinks" to="/Profile">
                Profile Navlink
            </NavLink></li>

            <li><NavLink className= "navLinks" to="/Wizard">
                Wizard Navlink
            </NavLink></li>

        </ul>
        
    </nav>
    )
}
