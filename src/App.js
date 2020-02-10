import React from 'react';
// import Slider from './components/Slider/Slider';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import './App.css';

const loader = () => {
  let perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
  EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
  time = parseInt((EstimatedTime / 1000) % 60) * 100;
  setTimeout(() => {
    document.querySelector('#Loader').classList.add('remove')
    setTimeout(() => {
      document.querySelector('#Loader').outerHTML = ""
     }, 500);
   }, time);
}

loader()

function App() {

  return (
    <div className="App">
      <Header />
      <Loader/>
      {/* <Slider/> */}
      <Details/>
    </div>
  );
}

export default App;
