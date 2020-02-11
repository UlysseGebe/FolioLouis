import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <header id="Header">
                <Link to="/"><div className="logo"></div></Link>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header