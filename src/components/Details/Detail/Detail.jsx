import React from 'react';
import './Detail.css'
// import Images from './Images/Images'

class Detail extends React.Component {

    render() {
        return (
            <div className="Detail">
                <div className="Presentation" style={{backgroundColor : this.props.color}}>
                    <div className="text">
                        <h1>{this.props.presentation.title}</h1>
                        <p>{this.props.presentation.text}</p>
                        <legend>{this.props.presentation.date}</legend>
                    </div>
                    <div className="mockup" ><img src="" alt=""/></div>
                </div>
                <div className="caseStudy">
                    <div className="text">
                        <h1>The Case Study</h1>
                        <p>{this.props.caseStudy.text}</p>
                    </div>
                    <img src="https://www.fedrigoni.fr/sites/default/files/2019-03/_MG_6220_SirioBlackBlack_BlackBlack.jpg" alt=""/>
                </div>
                {/* {this.props.images.map((images, i) => 
                <Images key={i} images={images} />
                )} */}
            </div>
        )
    }
}

export default Detail