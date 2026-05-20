const vowels = ["a", "e", "i", "o", "u"];

// Check if a letter is a vowel
// Überprüfen, ob ein Buchstabe ein Vokal ist
function isVowel(letter) {
  return vowels.includes(letter.toLowerCase());
}

// Translate a single word to Pig Latin
// Ein einzelnes Wort ins Pig Latin übersetzen
function translateWord(word) {
  // Remember if the original word was capitalized, to restore it later
  // Merken, ob das Originalwort großgeschrieben war, um es später wiederherzustellen
  const isCapitalized = word[0] === word[0].toUpperCase();
  const lower = word.toLowerCase();

  const firstLetter = lower[0];
  const secondLetter = lower[1];

  let translated;

  // If the word starts with a vowel, add "way" at the end
  // Wenn das Wort mit einem Vokal beginnt, "way" anhängen
  if (isVowel(firstLetter)) {
    translated = lower + "way";
  }

  // If the word starts with two consonants, move both to the end and add "ay"
  // Wenn das Wort mit zwei Konsonanten beginnt, beide ans Ende verschieben und "ay" anhängen
  else if (!isVowel(secondLetter)) {
    translated = lower.slice(2) + firstLetter + secondLetter + "ay";
  }

  // If the word starts with one consonant, move it to the end and add "ay"
  // Wenn das Wort mit einem Konsonanten beginnt, diesen ans Ende verschieben und "ay" anhängen
  else {
    translated = lower.slice(1) + firstLetter + "ay";
  }

  // Restore capitalization if the original word was capitalized
  // Großschreibung wiederherstellen, wenn das Originalwort großgeschrieben war
  if (isCapitalized) {
    return translated[0].toUpperCase() + translated.slice(1);
  }

  return translated;
}

// Read the input phrase from the command line
// Den Eingabesatz aus der Kommandozeile lesen
const input = process.argv[2];

if (!input) {
  console.log("Please provide a phrase to translate");
  process.exit(1);
}

// Split the phrase into words, translate each one, then join them back
// Den Satz in Wörter aufteilen, jedes übersetzen und wieder zusammenfügen
const translated = input
  .split(" ")
  .map(translateWord)
  .join(" ");

console.log(translated);
