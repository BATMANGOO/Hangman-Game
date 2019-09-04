'use strict';
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
  };

  const showInitPage = _ => {
    let markup = `
      <p class='hangman__stats'>Lives:
        <span class='hangman__lives'>${lives}</span>
      </p>
    `
    $hangman.innerHTML = markup;
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