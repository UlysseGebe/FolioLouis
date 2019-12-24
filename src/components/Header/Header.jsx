import React from 'react';
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <header id="Header">
                <div className="logo"></div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header