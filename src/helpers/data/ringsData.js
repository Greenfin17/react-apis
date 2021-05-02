// ringsData.js
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = 'https://the-one-api.dev/v2';
const apid = firebaseConfig.theOneApiKey;

const getQuotes = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/quote`, {
    headers: {
      Authorization: `Bearer ${apid}`
    }
  })
    .then((response) => {
      if (response.data) {
        const responseArr = Object.values(response.data);
        resolve(responseArr[0]);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getQuote = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/character/${id}/quote`, {
    headers: {
      Authorization: `Bearer ${apid}`
    }
  })
    .then((response) => {
      if (response.data) {
        const responseArr = Object.values(response.data);
        resolve(responseArr);
      }
    }).catch((error) => reject(error));
});

const getCharacters = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/character`, {
    headers: {
      Authorization: `Bearer ${apid}`
    }
  })
    .then((response) => {
      if (response.data) {
        const responseArr = Object.values(response.data);
        resolve(responseArr[0]);
      }
    })
    .catch((error) => {
      console.error(error);
      reject(error);
    });
});

const getPagedCharacters = (page, size) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/character?page=${page}&limit=${size}`, {
    headers: {
      Authorization: `Bearer ${apid}`
    }
  })
    .then((response) => {
      if (response.data) {
        resolve(response.data);
      }
    })
    .catch((error) => {
      console.error(error);
      reject(error);
    });
});

const getCharactersWithQuotes = () => new Promise((resolve, reject) => {
  Promise.all([getCharacters(), getQuotes()])
    .then(([characters, quotes]) => {
      const charactersWithQuotesArr = characters.map((character) => {
        const characterQuoteArr = quotes.filter(
          // eslint-disable-next-line no-underscore-dangle
          (quote) => quote.character === character._id
        );
        return { ...character, quotes: characterQuoteArr };
      });
      resolve(charactersWithQuotesArr);
    }).catch((error) => reject(error));
});

export {
  getCharacters, getPagedCharacters,
  getQuote, getQuotes, getCharactersWithQuotes
};
