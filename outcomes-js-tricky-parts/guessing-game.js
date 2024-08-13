function guessingGame() {
  const secretNumber = Math.floor(Math.random() * 100);
  let isGameOver = false;

  return function guess(number) {
    if (isGameOver) {
      return "The game is over, you already won!";
    }

    if (number === secretNumber) {
      isGameOver = true;
      return "You win!";
    } else if (number < secretNumber) {
      return "You're too low!";
    } else {
      return "You're too high!";
    }
  };
}

module.exports = { guessingGame };
