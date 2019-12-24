import React from 'react';
import Slider from './components/Slider/Slider';
// import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Loader /> */}
      <Slider/>
    </div>
  );
}

export default App;
