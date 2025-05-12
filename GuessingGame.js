// Generates a random number between 1 and 100
let number = Math.floor(Math.random() * 100) + 1;

// Initial value of chances taken to guess the number
let chances = 0;

// Variable to store user's guessed number
let guess;

console.log("🎯 Welcome to the Guessing Game!");
console.log("You need to guess a number between 1 and 100. Let's begin!\n");

// Ask the user for the first guess
guess = prompt("Enter a number between 1 and 100:");
chances++; // Increment chances

// Loop until the correct number is guessed
do {
  guess = Number.parseInt(guess);

  if (guess > number) {
    console.log("📈 The number you entered is too high.");
    guess = prompt("Try again! Enter a number between 1 and 100:");
    chances++;
  } else if (guess < number) {
    console.log("📉 The number you entered is too low.");
    guess = prompt("Try again! Enter a number between 1 and 100:");
    chances++;
  }

} while (guess !== number);

// Calculate the score
let score = 100 - chances;

// Congratulate the player
console.log("\n🎉 Congratulations!");
console.log(`You guessed the correct number: ${number}`);
console.log(`Your score is: ${score}`);
