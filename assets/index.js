// game logic

// declaring global variable
const root = document.querySelector("#root");
// store the current player score and genrated target scopre
let player_score;
let target_score;

  // Call the startNewRound function to start the game
  startNewRound();
// function that starts the game/new round of the game
function startNewRound() {
    // clear the document of element
    root.innerHTML = "";
  
    // set the target score to a random number between 25 and 75, and set the player's score to 0
    target_score = Math.floor(Math.random() * 50) + 25;
    player_score = 0;
  
    // Create a new p element to display the player's score and the target score
    let scoreElement = document.createElement("p");
    scoreElement.textContent =
      "Score: " + player_score + " | " + "Target: " + target_score;
  
    // Append the score element to the document
    root.appendChild(scoreElement);
  
    // Create three new crystals with different colors and add them to the document
    createCrystal("red");
    createCrystal("blue");
    createCrystal("green");
  }

// function that updates the score display and checks if the player has won or lost
function makeGuess() {
  // Select the <p> element inside the root element and update its text content with the player's score and the target score
  let scoreElement = root.querySelector("p");
  scoreElement.textContent =
    "Score: " + player_score + " | " + "Target: " + target_score;

  // Check if the player score is greater than the target score, if so, show a message and start a new round
  if (player_score > target_score) {
    alert("You lost this round!");
    startNewRound();
  }
  // Check if the player's score is equal to the target score, if so, show a message and start a new round
  else if (player_score === target_score) {
    alert("You won this round!");
    startNewRound();
  }
}


// Function that creates a new crystal and adds it to the document
function createCrystal(color) {
  // Create a new <div> element and add a class name based on the color
  const crystalElement = document.createElement("div");
  crystalElement.className = 'crystal ' + color;

  // Set the initial value of the crystal to a random number between 1 and 15
  let crystalValue = Math.floor(Math.random() * 15) + 1;

  // Add an event listener to the crystal that updates the player's score and calls the makeGuess function
  crystalElement.addEventListener("click", function () {
    player_score += crystalValue;
    makeGuess();
  });

  // Append the crystal element to the document
  root.appendChild(crystalElement);
}





