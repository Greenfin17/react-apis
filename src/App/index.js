// import NavBar from '../components/Navbar';
// import JokeGenerator from '../components/JokeGenerator';

import React, { useState } from 'react';
import './App.scss';
import Jokes from '../components/Jokes';
import Navbar from '../components/Navbar';
import Weather from '../components/Weather';

function App() {
  const [page, setPage] = useState('Jokes');
  const [backgrColor, setbackgrColor] = useState('black');

  const navClick = (e) => {
    console.warn(e.target.id);
    setPage(e.target.id);
    switch (e.target.id) {
      case 'jokes-link':
        setbackgrColor('black');
        break;
      default:
        setbackgrColor('white');
        break;
    }
  };

  return (
    <div className='App' style={{ backgroundColor: backgrColor }}>
      <Navbar handleClick={navClick} />
      { (page === 'jokes-link') && <Jokes /> }
      { (page === 'weather-link') && <Weather /> }
    </div>
  );
}

export default App;
