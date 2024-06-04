/*
- two sided layout, for two players
- load -> prompt - > names for each player
- display names in the header of the page
- in ech half, button
-- random number
- display the number separately, visually appealing in each players half
-- both have rolled, announce the winner

- count games
- give final score


-----------------------
ALTERNATIVE
- one button for rolling for both
- ask for names upon a request, not immediately
- roll to see who starts
- change color and expression after each round - winner and loser
- change expression according to the difference in the game

- select player ...

- brick by brick, not by rows


- throwing 6 dice, the other game



*/




//


document// get started
//    start button
//    (diable / change when playing)
//    get players' names
//    save and print names
//    ask if the players are the same, not to repeat typing the names     ...

function getNames() {
  let player1 = prompt("Player 1 Name:");
  let player2 = prompt("Player 2 Name:");
  document.querySelector(".name-player-1").innerHTML = player1;
  document.querySelector(".name-player-2").innerHTML = player2;
  return [player1, player2]
}
// separate individual tasks
// print in a different function


// individual tasks
// main function
//front-end printne do browsera
// backend - udela praci
//
//



//let counterGames = 0;
let players = document.querySelector(".control-btn");
console.log(players.addEventListener("click", function () {
  // check number of games and if there are new platers           ...
  getNames();
}));



// create objects to store the rolls and game wins

// roll the dice
//   generate random numbers on click
//   dispaly result
//    each player
//  
//



function rollDice() {
  let rollNumber = Math.floor(Math.random() * 6);
  document.querySelector(".player-1-result").innerHTML = rollNumber;
  return rollNumber;
}





// score
//    compare resluts
//    display the winner of the rounds
//    count rounds
//    save score
//    update visual element
//
// 
// 

// final score
//     display score
// 
// 
