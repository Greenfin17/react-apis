// LordCards.js

const LordCard = () => {
  return (
    <div className='card character-card' id="character-id" style={{ width: '18rem' }}>
      <div className='card-body'>
        <div className='card__face card__face--front'>
          <h5 className='card-title character-card-title'>{characterName}</h5>
          <p className='gender'>{characterGender}<br />{characterRace}</p>
        </div>
        <div className='card__face card__face--back'>
          <p className='card-quote'>{characterQuote}</p>
        <button className='fakeClick' onClick={fakeClick}>Fake Button</button>
        </div>
      </div>
    </div>
  );
};

export default LordCard;
