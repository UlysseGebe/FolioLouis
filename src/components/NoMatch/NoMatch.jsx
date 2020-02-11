import React from 'react';
import './NoMatch.css'

class NoMatch extends React.Component {
    componentDidMount() {
        document.title = "404";
    }
    render() {
        return (
            <div className="NoMatch">
                <h2>404</h2>
            </div>
        )
    }
}

export default NoMatch