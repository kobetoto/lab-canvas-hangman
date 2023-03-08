class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = []; // all unique letters tried
    this.guessedLetters = ''; // the already found letters
    this.errorsLeft = 10;// ... your code goes here
  }

  pickWord() {
    const rand = Math.floor(Math.random()*this.words.length);
    return this.words[rand];// ... your code goes here
  }

  checkIfLetter(keyCode) {
    const codes = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];// ... your code goes here
    if (codes.includes(keyCode)) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      // already present
      return false;
    } else {
      // not already present
      this.letters.push(letter);
      return true;
    }// ... your code goes here
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;// ... your code goes here
  }

  addWrongLetter(letter) {
    this.errorsLeft--;// ... your code goes here
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }// ... your code goes here
  }

  checkWinner() {
        // ... your code goes here
        if (this.guessedLetters.length === [...new Set(this.secretWord)].length) {
          return true;
        } else {
          return false;
        }// ... your code goes here
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  // Au click sur le bouton start
  startGameButton.addEventListener('click', event => {
    // Creation d'une partie !
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    hangmanCanvas.createBoard()

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
