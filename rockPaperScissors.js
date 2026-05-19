// All valid moves in the game
// Alle gültigen Züge des Spiels
const moves = ["rock", "paper", "scissors"];

// Read the player's move from the command line
// process.argv is an array: [0] = "node", [1] = filename, [2] = first argument the user types
// Example: "node rockPaperScissors.js rock" → playerMove = "rock"
// Zug des Spielers aus der Kommandozeile lesen
// process.argv ist ein Array: [0] = "node", [1] = Dateiname, [2] = erster eingegebener Wert
// Beispiel: "node rockPaperScissors.js rock" → playerMove = "rock"
const playerMove = process.argv[2];

// Check if the input is valid
// moves.includes() returns true if the value exists in the array
// ! flips the result — "if NOT included, show an error"
// Überprüfen, ob die Eingabe gültig ist
// moves.includes() gibt true zurück, wenn der Wert im Array vorhanden ist
// ! kehrt das Ergebnis um — "wenn NICHT enthalten, Fehler ausgeben"
if (!moves.includes(playerMove)) {
  console.log("Please provide a valid move: rock, paper, or scissors");
  // Stop the program immediately with error code 1
  // Programm sofort mit Fehlercode 1 beenden
  process.exit(1);
}

// Pick a random move for the computer
// Math.random() gives a decimal between 0 and 1, e.g. 0.731
// * 3 gives a number between 0 and 3, e.g. 2.193
// Math.floor() rounds down to 0, 1, or 2 — a valid array index
// Zufälligen Zug für den Computer wählen
// Math.random() gibt eine Dezimalzahl zwischen 0 und 1 zurück, z.B. 0.731
// * 3 ergibt eine Zahl zwischen 0 und 3, z.B. 2.193
// Math.floor() rundet ab auf 0, 1 oder 2 — ein gültiger Index
const computerMove = moves[Math.floor(Math.random() * 3)];

// Compare moves and determine the result
// Züge vergleichen und Ergebnis ermitteln
let result;
if (playerMove === computerMove) {
  // Same move = draw
  // Gleicher Zug = Unentschieden
  result = "Draw!";
} else if (
  // All three combinations where the player wins
  // Alle drei Kombinationen, bei denen der Spieler gewinnt
  (playerMove === "rock" && computerMove === "scissors") ||
  (playerMove === "paper" && computerMove === "rock") ||
  (playerMove === "scissors" && computerMove === "paper")
) {
  result = "You win!";
} else {
  // All other cases = computer wins
  // Alle anderen Fälle = Computer gewinnt
  result = "You lose!";
}

// Print the result to the console
// Template literal allows embedding variables with ${}
// Ergebnis in der Konsole ausgeben
// Template Literal erlaubt das Einbetten von Variablen mit ${}
console.log(
  `You chose ${playerMove}. Computer chose ${computerMove}. ${result}`,
);
