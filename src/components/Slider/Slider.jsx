import React from 'react';
import './Slider.css'
import fullpage from 'fullpage.js'
import 'fullpage.js/vendors/scrolloverflow'
import 'fullpage.js/dist/fullpage'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project from '../Project/Project'
import slider from "../../data/Slider"

const navigation = () => {
    let title = ['Home', 'Septembre 2019', 'August 2019']
    const items = document.querySelectorAll('#fp-nav ul li a')
    for (let i = 0; i < items.length; i++) {
        let content = items[i].querySelector('.fp-sr-only')
        let html = '<legend>'+title[i]+'</legend>'
        content.innerHTML = html+'•'
        console.log(content)
    }
}

class Slider extends React.Component {
    componentDidMount() {
        new fullpage('.fullpage', {
            autoScrolling:true,
            scrollHorizontally: true,
            navigation: true,
            showActiveTooltip: true,
        });

        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            
          
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
          
        });

        navigation()
    }
    render() {
        return (
            <div className="fullpage">
                {slider.map((v, i, a) => 
                    <Project key={i} index={i} title={v.title} text={v.text} button={v.button} image={v.img} color={v.color} />
                )}
            </div>
        )
    }
}

export default Slider