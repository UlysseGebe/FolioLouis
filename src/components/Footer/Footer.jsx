import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <h4>Louis Stuyck</h4>
                <div className="socialNetwork">
                    <a href="https://www.google.com/">Linkedin</a>
                    <a href="https://www.google.com/">Instagram</a>
                    <a href="https://www.google.com/">Dribbble</a>
                </div>
            </footer>
        )
    }
}

export default Footer