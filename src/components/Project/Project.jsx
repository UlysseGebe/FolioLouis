import React from 'react';
import './Project.css'
import { Link } from 'react-router-dom';

class Project extends React.Component {
    state = {
        img: this.props.image
    }
    render() {
        return (
            <div className="section" id="section" style={{backgroundColor : this.props.color}}>
                <div className="content">
                    <div className={this.props.image !== false ? "text" : "text no-image"}>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.text}</p>
                        <Link to="/project"><button>{this.props.button}</button></Link>
                    </div>
                    {this.state.img !== false ? <div className="mockup" ><img src={this.state.img} alt=""/></div> : null }
                </div>
            </div>
        )
    }
}

export default Project