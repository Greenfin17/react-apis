import React, { useState, useEffect } from 'react';
import LordNav from './navigation/LordNav';
import RingCard from './cards/RingCard';
import { getCharactersWithQuotes } from '../helpers/data/ringsData';

function LordRings() {
  const [charactersWithQuotes, setCharactersWithQuotes] = useState([]);

  useEffect(() => {
    getCharactersWithQuotes().then((responseArr) => {
      setCharactersWithQuotes(responseArr);
      for (let i = 0; i < 100; i += 1) {
        if (responseArr[i].quotes.length) {
          console.warn(responseArr[i].quotes[0].dialog);
        }
      }
    });
  }, []);

  return (
    <div className='lord-rings-page'>
      <LordNav
        />
      <div className='lord-rings-container d-flex flex-wrap justify-content-around'>
      {charactersWithQuotes.map((character, key) => (
        <RingCard
          key={key}
          characterName={character.name}
          characterGender={character.gender}
          characterRace={character.race}
          characterQuote={ character.quotes.length ? character.quotes[0].dialog : '' }
        />
      ))}
     </div>
    </div>
  );
}

export default LordRings;
