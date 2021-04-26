import React, { useState } from 'react';
import { getJoke } from '../helpers/data/jokesData';
import jokeImg from '../assets/jokegen.png';

export default function Jokes() {
  const [showJoke, setShowJoke] = useState(false);
  const [showPunchLine, setShowPunchLine] = useState(true);
  const [jokeSetup, setJokeSetup] = useState('');
  const [jokePunchLine, setPunchLine] = useState('');
  const [visiblePunchLine, setVisiblePunchLine] = useState('');
  const [buttonText, setButtonText] = useState('Get a joke');

  const getJokeClick = () => {
    if (showPunchLine) {
      getJoke().then((joke) => {
        setShowJoke(true);
        setJokeSetup(joke.setup);
        setPunchLine(joke.punchline);
        setVisiblePunchLine('');
        setShowPunchLine(false);
        setButtonText('Show punchline');
      });
    } else if (showJoke) {
      setShowPunchLine(true);
      setVisiblePunchLine(jokePunchLine);
      setButtonText('Get another joke');
    }
  };

  return (
    <div className='joke-page'>
      <h1>Joke Generator</h1>
      <div className='jokes'>
        <div className='card'>
          <img src={jokeImg} className='card-img-top' alt="Joke Generator" />
          <div className='card-body'>
            { showJoke && <p className='card-text setup'>{jokeSetup}</p> }
            <p className='card-text punchline'>{visiblePunchLine}</p>
            <button onClick={getJokeClick} className='btn btn-dark'>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
