import React from 'react';
import './Loader.css'

const loader = () => {
    let perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime / 1000) % 60) * 100;
    setTimeout(() => {
      if (document.querySelector('#Loader') != null) {
        document.querySelector('#Loader').classList.add('remove')
        setTimeout(() => {
        document.querySelector('#Loader').outerHTML = ""
       }, 500);
      }
    }, time);
}
  
loader()

class Loader extends React.Component {
    render() {
        return (
            <div id="Loader">
                <div className="logo"></div>
            </div>
        )
    }
}

export default Loader