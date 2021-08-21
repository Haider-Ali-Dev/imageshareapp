import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link style={{textDecoration: 'none'}} to="/gallery">Gallery</Link>
            </li>

            <li>
                <Link style={{textDecoration: 'none'}} to="/">Add Image</Link>
            </li>
        </ul>
    );
}


export default NavBar;