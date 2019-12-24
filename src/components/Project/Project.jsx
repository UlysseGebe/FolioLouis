import React from 'react';
import './Project.css'

class Project extends React.Component {
    state = {
        img: this.props.image
    }
    render() {
        return (
            <div className="section" id="section">
                <div className="content" style={{backgroundColor : this.props.color}}>
                    <div className={this.props.image !== false ? "text" : "text no-image"}>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.text}</p>
                        <button>{this.props.button}</button>
                    </div>
                    {this.state.img !== false ? <div className="mockup" ><img src={this.state.img} alt=""/></div> : null }
                </div>
            </div>
        )
    }
}

export default Project