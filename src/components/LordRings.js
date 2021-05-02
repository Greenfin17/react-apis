import React, { useState, useEffect } from 'react';
import RingCard from './cards/RingCard';
import { getCharactersWithQuotes } from '../helpers/data/ringsData';

function LordRings() {
  const [charactersWithQuotes, setCharactersWithQuotes] = useState([]);

  useEffect(() => {
    getCharactersWithQuotes().then((responseArr) => {
      setCharactersWithQuotes(responseArr);
    });
  }, []);

  return (
    <div className='lord-rings-page'>
      <h1>Characters from Lord of the Rings</h1>
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
