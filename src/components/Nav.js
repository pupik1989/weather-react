import React from 'react'
import '../style.css'

import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="nav-links">
            <Link className="link" to="/">
                <li>Weather</li>
            </Link>
            <Link className="link" to="/favorites">
                <li>Favorites</li>
            </Link>


        </nav>
    )
}

export default Nav