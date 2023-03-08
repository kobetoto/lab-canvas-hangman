class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
  }

  createBoard() {
    console.log('creating board')

    
    // la methode de dessin qui va s'occuper de tout bien dessiner le jeu:
    //   - les lignes du mot secret

    this.drawLines()
  }

  drawLines() {
    //hangman.secretWord
    // for(let i = 0; i<secretWord.length; i++){
    //   //draw lines 
    // }   

    // tracer une ligne de test
    
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
