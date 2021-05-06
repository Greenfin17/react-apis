// MovieCard.js
import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({
  Budget,
  Revenue,
  Nominations,
  Wins,
  RTScore
}) => (
  <Card>
    <CardBody>
      <CardTitle tag="h5">Card title</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
      <ul>
        <li>Budget: {Budget}</li>
        <li>Revenue: {Revenue}</li>
        <li>Academy Nominations:  {Nominations}</li>
        <li>Academy Wins: {Wins}</li>
        <li>Rotten Tomatoe Score: {RTScore}</li>
      </ul>
      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
);

MovieCard.propTypes = {
  Budget: PropTypes.number,
  Revenue: PropTypes.number,
  Nominations: PropTypes.number,
  Wins: PropTypes.number,
  RTScore: PropTypes.number
};

export default MovieCard;
