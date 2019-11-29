import React from 'react';
import './Slider.css'
import fullpage from 'fullpage.js'

class Slider extends React.Component {
    componentDidMount() {
        new fullpage('#fullpage', {
            //options here
            autoScrolling:true,
            scrollHorizontally: true
        });
        
        //methods
        fullpage_api.setAllowScrolling(false);
    }
    render() {
        return (
            <div className="section" id="fullpage">
                <div className="slide" data-anchor="slide1"> Slide 1 </div>
                <div className="slide" data-anchor="slide2"> Slide 2 </div>
                <div className="slide" data-anchor="slide3"> Slide 3 </div>
                <div className="slide" data-anchor="slide4"> Slide 4 </div>
            </div>
        )
    }
}

export default Slider