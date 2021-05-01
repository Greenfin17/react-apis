// LordCards.js
import React from 'react';
import PropTypes from 'prop-types';

const RingCard = ({
  characterName,
  characterGender,
  characterRace,
  characterQuote
}) => (
  <div className='card character-card' id="character-id" style={{ width: '18rem' }}>
    <div className='card-body'>
      <div className='card__face card__face--front'>
        <h5 className='card-title character-card-title'>{characterName}</h5>
        <p className='gender'>{characterGender}<br />{characterRace}</p>
      </div>
      <div className='card__face card__face--back'>
        <p className='card-quote'>{characterQuote}</p>
      </div>
    </div>
  </div>
);

RingCard.propTypes = {
  characterName: PropTypes.string.isRequired,
  characterGender: PropTypes.string,
  characterRace: PropTypes.string,
  characterQuote: PropTypes.string
};

export default RingCard;
