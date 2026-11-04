
const choices = ["rock", "paper", "scissors"];
const result = document.getElementById("result");

function playGame(playerChoice) {
    // Generate a random computer choice
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    let message = "";

    // Determine who wins
    if (playerChoice === computerChoice) {
        message = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        message = "You win!";
    } else {
        message = "Computer wins!";
    }

    // Display the result on the page
    result.textContent =
        "You chose " + playerChoice +
        ". Computer chose " + computerChoice +
        ". " + message;
}

// Add click events to each button
document.getElementById("rock").addEventListener("click", function() {
    playGame("rock");
});

document.getElementById("paper").addEventListener("click", function() {
    playGame("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
    playGame("scissors");
});
