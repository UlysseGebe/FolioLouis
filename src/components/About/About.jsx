import React from 'react';
import detail from "../../data/Detail"
import './About.css'

class About extends React.Component {
    componentDidMount() {
        document.title = "Folio Louis - About";
    }
    render() {
        const data = detail[0]
        return (
            <div className="About" style={{backgroundColor : data.primColor}}>
                <div className="text">
                    <h1>{data.presentation.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: data.presentation.text }} />
                    <button>{data.presentation.button}</button>
                </div>
                <img src="https://i.pinimg.com/originals/ca/95/f6/ca95f6f9bb87757d7858e4549d410eaa.jpg" alt=""/>
            </div>
        )
    }
}

export default About