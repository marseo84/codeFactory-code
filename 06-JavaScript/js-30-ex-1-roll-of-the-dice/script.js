// get names of two players
function promptTwoPlayerNames() {
  let player1 = prompt("Player 1 Name:");
  let player2 = prompt("Player 2 Name:");
  return {player1, player2}
}

// validate string input
function validateInputLengthGreaterThanTwo(string) {
  if (string.length < 1) {
    return false;
  }
  return true;
}

// roll dice
function rollDice() {
  let min = 1;
  let max = 6;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}






// main function
function main() {
  

  
}
