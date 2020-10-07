import React from 'react';
import './App.css';
import Title from './Title'
import Home from './Home'
import Starwars from './StarWars';
function App() {
  return (
    <div className="App-header">
      <Home home="FEW 2.3 Final - Beck Haywood"><Title title="Beck Haywood"></Title></Home>
      <Starwars/>
    </div>
  );
}

export default App;
