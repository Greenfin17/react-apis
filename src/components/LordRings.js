import React, { useState } from 'react';
import LordNav from './navigation/LordNav';

function LordRings() {
  const [characterName, setCharacterName] = useState('Fido');
  const [characterRace, setCharacterRace] = useState('Leprechaun');
  const [characterGender, setCharacterGender] = useState('Male');
  const [characterQuote, setCharacterQuote] = useState('');

  const fakeClick = () => {
    setCharacterName('Freddy');
    setCharacterRace('Neanderthol');
    setCharacterGender('Male');
    setCharacterQuote('An apple a day keeps the doctor away.');
  };

  return (
    <div className='lord-rings-page'>
      <LordNav />
      <div className='lord-rings-container d-flex flex-wrap justify-content-around'>
     </div> 
    </div>
  );
}

export default LordRings;
