'use strict';
import { sound } from "../data/sound.js";
import Home from "./home.js";

const How = (_ => {
  //CACHE dom
  const $hangMan = document.querySelector('.hangman');

  const init = _ => {
    render();
    listeners();
  };

  const listeners = _ => {
    document.querySelector('.hangman__trigger').addEventListener('click', _ =>{
      sound.click.play()
      Home.init();
    });
  }

  const render = _ => {
    let markup = `
      <h1 class='hangman__title'>Instructions</h1>
      <h2 class='how intro'>Alright here is how you play!</h2>
      <ul class='how'>
        <li class='spaced'>When you start the game, the game will automatically choose a random word for you.</li>
        <li class='spaced'>Your job is to guess the correctt word within the number of lives you have</li>
        <li class='spaced'>Every time you get a word wrong, you lose a life and a item (bodypart or rope) will pop up oin the screen</li>
        <li class='spaced'>Your job is tto successfully guess the word before the whole body gets made on the screen! Good Luck!</li>
      </ul>
      <button class='button hangman__trigger'>Main Menu</buttton>
    `
    $hangMan.innerHTML = markup;
  }

  return {
    init
  }
})();

export default How;