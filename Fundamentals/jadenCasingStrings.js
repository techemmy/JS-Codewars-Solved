String.prototype.toJadenCase = function () {
  // .split(" ") splits the sentences by the spaces into an array
  const capitalizedLetter = this.split(" ").map(
    // here, we go through every word, turn the first letter at index 0 to uppercase
    // then we add the uppercase letter with the rest of the word
    // this code does it for all the words in the array
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  // here, we add the words together with a space between them and return it
  return capitalizedLetter.join(" ");
};
