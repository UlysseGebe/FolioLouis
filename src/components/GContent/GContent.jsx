import React from 'react';
import './GContent.css'

class GContent extends React.Component {
    render() {
        return (
            <div className="GContentContainer">
                <h1>{this.props.title}</h1>
                <img src={this.props.image} alt={this.props.title} />
            </div>
        )
    }
}

export default GContent