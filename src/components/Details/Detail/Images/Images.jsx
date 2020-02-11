import React from 'react';
import './Images.css'

class Images extends React.Component {

    render() {
        return (
            <div className="Images">
                <div className="mockup" ><img src="" alt=""/></div>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

export default Images