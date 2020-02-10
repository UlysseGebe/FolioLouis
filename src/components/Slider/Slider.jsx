import React from 'react';
import './Slider.css'
import Project from '../Project/Project'
import slider from "../../data/Slider"
import ReactFullpage from '@fullpage/react-fullpage';

let title = ['Home', 'Septembre&nbsp2019', 'August&nbsp2019']

const navigation = (array) => {
    let title = array
    const items = document.querySelectorAll('#fp-nav ul li a')
    for (let i = 0; i < items.length; i++) {
        let content = '<div>•<div>'
        let html = '<legend>'+title[i]+'</legend>'
        items[i].innerHTML = html + content
    }
}

const Fullpage = () => (
    <ReactFullpage
      scrollingSpeed = {1000} /* Options here */
      navigation
      showActiveTooltip
      anchors = {title}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
                {slider.map((v, i, a) => 
                    <Project key={i} index={i} title={v.title} text={v.text} button={v.button} image={v.img} color={v.color} />
                )}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

class Slider extends React.Component {
    componentDidMount() {
        navigation(title)
    }
    render() {
        return (
            <div className="sliderContainer">
                <Fullpage/>
            </div>
        )
    }
}

export default Slider