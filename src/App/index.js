// import NavBar from '../components/Navbar';
// import JokeGenerator from '../components/JokeGenerator';

import React, { useState } from 'react';
import './App.scss';
import Jokes from '../components/Jokes';
import Navbar from '../components/navigation/Navbar';
import Lyrics from '../components/Lyrics';
import Weather from '../components/Weather';
import LordRings from '../components/LordRings';

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
      { (page === 'lyrics-link') && <Lyrics /> }
      { (page === 'lord-link') && <LordRings /> }
    </div>
  );
}

export default App;
