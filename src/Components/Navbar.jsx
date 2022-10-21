import React from 'react'
import './Components.css'
import {Link} from 'react-router-dom'


function Navbar() {
    return (
        <div className="nav">
        <nav className="navbar">
            <ul className="list">
                <li className="item">
                    <Link className="link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="item">
                    <Link className="link" to="/Fitness">Fitness</Link>
                </li>
                <li className="item">
                    <Link className="link" to="/Technology">Technology</Link>
                </li>
                <li className="item">
                    <Link className="link" to="/Hollywood">Hollywood</Link>
                </li>
                <li className="item">
                    <Link className="link" to="/Tourism">Tourism</Link>
                </li>
                <li className="item">
                    <Link className="link" to="/Food">Food</Link>
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default Navbar;