import React from 'react';
import Router from './Router';
import Loader from './components/Loader/Loader';
import './App.css';

function App() {
  return (
    <div className="App">
      <Loader/>
      <Router/>
    </div>
  );
}

export default App;
