// jokeCards.js
import React from 'react';
import jokegen from '../../assets/jokegen.png';

function JokeGenerator() {
  return (
  <div className="jokes">
    <div className="card">
      <img src={jokegen} className="card-img-top" alt="Joke Generator" />
      <div classNme="card-body">
        <a href="#" className="btn btn-dark" id="get-joke">GET A JOKE</a>
      </div>
    </div>
  </div>
  );
}

/*
const jokeSetup = (joke) => {
  document.querySelector('main').innerHTML = `
  <div class="jokes">
    <div class="card">
      <img src="${jokegen}" class="card-img-top" alt="Joke Generator">
      <div class="card-body">
        <p class="card-text setup">${joke.setup}</p>
        <p class="card-text punchline"></p>
        <a href="#" class="btn btn-dark" id="get-punchline">GET PUNCHLINE</a>
      </div>
    </div>
  </div>`;
};

const jokePunchLine = (joke) => {
  document.querySelector('main').innerHTML = `
  <div class="jokes">
    <div class="card">
      <img src="${jokegen}" class="card-img-top" alt="Joke Generator">
      <div class="card-body">
        <p class="card-text setup">${joke.setup}</p>
        <p class="card-text punchline">${joke.punchline}</p>
        <a href="#" class="btn btn-dark" id="get-new-joke">GET A NEW JOKE</a>
      </div>
    </div>
  </div>`;
};
const jokeError = () => {
  document.querySelector('main').innerHTML = `
    <div class="jokes">
      <div class="card" style="width: 18rem;">
        <img src="${jokegen}" class="card-img-top" alt="Joke Generator">
        <div class="card-body">
          <h5 class="card-title">Error getting joke</h5>
          <a href="#" class="btn btn-primary" id="get-joke">Get a Joke</a>
        </div>
      </div>
    </div>`;
};
*/
export default JokeGenerator;
