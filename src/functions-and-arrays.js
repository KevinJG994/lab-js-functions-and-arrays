// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(firstNumber, secondNumber) {
  const maxNumber = Math.max(firstNumber, secondNumber);
  return maxNumber;
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  if (words.length == 0) {
    return null;
  }

  let largerWord = words[0];

  for (let i = 0; i < words.length; i++) {
    const newWord = words[i];

    if (newWord.length > largerWord.length) {
      largerWord = newWord;
    }
  }
  return largerWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sumArray = 0;

  if (numbers.length == 0) {
    return 0;
  } else if (numbers.length == 1) {
    return numbers[0];
  } else {
    for (let i = 0; i < numbers.length; i++) {
      sumArray += numbers[i];
    }
    return sumArray;
  }
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  if (numbers2.length == 0) {
    return 0;
  }

  const result = sumNumbers(numbers2) / numbers2.length;
  return result;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

let searchWord = "trouble";

function doesWordExist(words2, searchWord) {
  if (words2.length == 0) {
    return null;
  }

  if (words2.includes(searchWord)) {
    return true;
  } else {
    return false;
  }
}
