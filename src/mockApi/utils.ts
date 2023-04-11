export const generateRandomString = (length = 8) => {
  const lettersAndNumbers = getAllLettersAndNumbers();
  let segment = "";

  for (let i = 0; i < length; i++) {
    segment += lettersAndNumbers[getRandomIndex(lettersAndNumbers)];
  }

  return segment;
};

function getAllLettersAndNumbers() {
  const lettersAndNumbers = [];
  for (let i = 65; i <= 90; i++) {
    // Upper case letters (A-Z)
    lettersAndNumbers.push(String.fromCharCode(i));
    // Lower case letters (a-z)
    lettersAndNumbers.push(String.fromCharCode(i + 32));

    // push 0-9 into the array
    if (i < 75) {
      lettersAndNumbers.push(String(i - 65));
    }
  }

  return lettersAndNumbers;
}

function getRandomIndex(list: unknown[]) {
  return Math.floor(Math.random() * list.length);
}
