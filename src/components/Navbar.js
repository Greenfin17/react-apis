// domBuilder.js
import React from 'react';
import { Nav } from 'reactstrap';
import JokeGenerator from './Cards/JokeCards';

function NavBar() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#" id="api-home">API Apps</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href='#' onClick={JokeGenerator} id="jokes-link">Jokes<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" id="lyrics-link">Lyrics</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" id="weather-link">Weather</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" id="lord-link">Lord of the Rings</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

export default NavBar;
