import { React, useEffect, useState } from 'react';
import './App.scss';
// import NavBar from '../components/Navbar';
// import JokeGenerator from '../components/JokeGenerator';
import { getJoke } from '../helpers/data/jokesData';

function App() {
  const [showJoke, setShowJoke] = useState(false);
  const [showInitialButton, setShowInitialButton] = useState(true);
  const [showPunchLine, setShowPunchLine] = useState(false);
  const [jokeSetup, setJokeSetup] = useState('');
  const [jokePunchLine, setPunchLine] = useState('');

  const getJokeClick = () => {
    if (showPunchLine) {
      getJoke().then((joke) => {
        setJokeSetup(joke.setup);
        setPunchLine(joke.punchline);
        setShowInitialButton(false);
        setShowPunchLine(false);
      });
    } else if (showJoke) {
      setShowPunchLine(true);
    }
  };

  const initialClick = () => {
    setShowInitialButton(false);
    setShowJoke(true);
  };

  useEffect(() => {
    getJoke()
      .then((joke) => {
        setJokeSetup(joke.setup);
        setPunchLine(joke.punchline);
      });
  }, []);

  return (
    <div className='App'>
      <h1>Joke Generator</h1>
      { showJoke && <p className='joke-setup'>{jokeSetup}</p> }
      { showPunchLine && <p className='joke-punchline'>{jokePunchLine}</p> }

      { showInitialButton && <button onClick={initialClick} className='initalJoke'>Get a joke</button> }

      { !showInitialButton && <button onClick={getJokeClick}>
          { showPunchLine ? 'Get a new Joke' : 'Show punchline' }
        </button>
      }
    </div>
  );
}

export default App;
