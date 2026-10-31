
// Ask the player to choose rock, paper, or scissors
let userChoice = prompt("Choose rock, paper, or scissors:");


// Convert the player's answer to lowercase
// Keep asking until the player enters a valid choice
while (
    userChoice === null ||
    !["rock", "paper", "scissors"].includes(userChoice.trim().toLowerCase())
) {
    alert("Invalid choice! Please enter rock, paper, or scissors.");
    userChoice = prompt("Choose rock, paper, or scissors:");
}

// Standardize the player's input
userChoice = userChoice.trim().toLowerCase();

// Display the player's choice in the console
console.log("User chose: " + userChoice);

// Create a list of possible choices
let choices = ["rock", "paper", "scissors"];

// Generate a random choice for the computer
let randomIndex = Math.floor(Math.random() * 3);
let computerChoice = choices[randomIndex];

// Display the computer's choice in the console
console.log("Computer chose: " + computerChoice);

// Determine the winner of the game
if (userChoice === computerChoice) {
    console.log("It's a tie!");
} else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
) {
    console.log("You win!");
} else {
    console.log("Computer wins!");
}

// Ask the player if they want another round
let playAgain = confirm("Would you like to play again?");

if (playAgain) {
    location.reload();
} else {
    console.log("Thanks for playing!");
}

