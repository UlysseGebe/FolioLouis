import React from 'react';
import './Slider.css'
import * as fullpage from 'fullpage.js/dist/fullpage'
import Project from '../Project/Project'
import slider from "../../data/Slider"

const navigation = (array) => {
    let title = array
    const items = document.querySelectorAll('#fp-nav ul li a')
    for (let i = 0; i < items.length; i++) {
        let content = items[i].querySelector('.fp-sr-only')
        let html = '<legend>'+title[i]+'</legend>'
        content.innerHTML = '•'
        items[i].innerHTML = html + content.outerHTML
    }
}

class Slider extends React.Component {
    componentDidMount() {
        let title = ['Home', 'Septembre&nbsp2019', 'August&nbsp2019']

        new fullpage('.fullpage', {
            autoScrolling: true,
            navigation: true,
            showActiveTooltip: true,
            anchors: title,
        });
        navigation(title)
    }
    render() {
        return (
            <div className="sliderContainer">
                <div className="fullpage">
                    {slider.map((v, i, a) => 
                        <Project key={i} index={i} title={v.title} text={v.text} button={v.button} image={v.img} color={v.color} />
                    )}
                </div>
            </div>
        )
    }
}

export default Slider