'use strict';
import Home from "./home.js";
import { sound } from '../data/sound.js';

const Game = (_ => {
  const $hangman = document.querySelector('.hangman');
  const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const words = ['apple','dog','car','pizza','mango'];
  let chosenWord;
  let guessingWord;
  let lives;
  let guesses;

  const init = _ => {
    chosenWord = chooseWord();
    guessingWord = Array(chosenWord.length).fill('_');
    guesses = [];
    lives = 7;
    showInitPage();
    listeners();
  };

  const showInitPage = _ => {
    let markup = `
      <p class='hangman__stats'>Lives:
        <span class='hangman__lives'>${lives}</span>
      </p>
      <h1 class='hangman__title'>Hangman</h1>
      <canvas class='hangman__board' height='155px'></canvas>
      <div class='hangman__word'>${guessingWord.join('')}</div>
      <p class='hangman__instructions'> Pick a letter below to guess the whole word.</p>
      <ul class='hangman__letters'>
        ${createLetters()}
      </ul>
      <button class='button hangman__trigger'>Main Menu</buttton>
    `
    $hangman.innerHTML = markup;
  };

  const listeners = _ => {
    $hangman.addEventListener('click', event => {
      if(event.target.matches('.hangman__letter')) {
        sound.click.play()
        check(event.target.innerHTML.toLowerCase())
      }
      if(event.target.matches('.hangman__trigger')) {
        sound.click.play();
        Home.init();
      }
    });
  };

  const isAlreadyTaken = letter => {
    return guesses.includes(letter);
  }

  const check = guess => {
    if (isAlreadyTaken(guess))  return;

    guesses.push(guess);

    //check if guess exists in given word
    if (chosenWord.includes(guess)) {
      //update the guessing word
      updateGuessingWord(guess);
    } else {
      lives--;
      //render board
    }
    render()
    //check if game is over
  }

  const createLetters = _ => {
    let markup = '';
    letters.forEach(letter => {
      const isActive = isAlreadyTaken(letter) ? 'hangman__letter--active' : '';
      markup += `
        <li class='hangman__letter ${isActive}'>${letter}</li>
      `
    });
   return markup; 
  };

  const render = _ => {
    document.querySelector('.hangman__lives').innerHTML = lives;
    document.querySelector('.hangman__word').innerHTML = guessingWord.join('');
    document.querySelector('.hangman__letters').innerHTML = createLetters();
  };

  const updateGuessingWord = letter => {
    chosenWord.split('').forEach((elem, index) => {
      if (elem === letter) {
        guessingWord[index] = elem;
      }
    });
  };



  const chooseWord = _ => {
    let randNum = Math.floor(Math.random() * words.length);
    return words[randNum];
  };

  return {
    init
  }
})();

export default Game;