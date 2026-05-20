// Read the phrase and shift number from the command line
// Satz und Verschiebungszahl aus der Kommandozeile lesen
const phrase = process.argv[2];
const shift = parseInt(process.argv[3]);

if (!phrase || isNaN(shift)) {
  console.log("Please provide a phrase and a shift number");
  console.log('Example: node caesarCipher.js "hello world" 3');
  process.exit(1);
}

// Encrypt a single letter by shifting it through the alphabet
// Einen einzelnen Buchstaben durch Verschiebung im Alphabet verschlüsseln
function shiftLetter(letter, shift) {
  // Get the position of the letter in the alphabet (0–25)
  // Position des Buchstabens im Alphabet ermitteln (0–25)
  const position = letter.charCodeAt(0) - "a".charCodeAt(0);

  // Shift the position and wrap around with % 26 so it stays within the alphabet
  // Position verschieben und mit % 26 im Alphabet halten (Wraparound)
  // + 26 before % ensures negative shifts don't produce negative numbers
  // + 26 vor % verhindert negative Zahlen bei negativer Verschiebung
  const shifted = ((position + shift) % 26 + 26) % 26;

  // Convert the new position back to a letter
  // Neue Position zurück in einen Buchstaben umwandeln
  return String.fromCharCode(shifted + "a".charCodeAt(0));
}

// Encrypt the full phrase letter by letter
// Den gesamten Satz Buchstabe für Buchstabe verschlüsseln
const encrypted = phrase
  .toLowerCase()
  .split("")
  .map((char) => {
    // Only shift letters, leave spaces and other characters unchanged
    // Nur Buchstaben verschieben, Leerzeichen und andere Zeichen unverändert lassen
    if (char >= "a" && char <= "z") {
      return shiftLetter(char, shift);
    }
    return char;
  })
  .join("");

console.log(encrypted);
