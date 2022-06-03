const getNthElement = (index, array) => {
  if (index > (array.length -1)) {
  return array[index % array.length];
  } else {
    return array[index];
  }
};

const arrayToCSVString = array => {
  const output = array.reduce((acc,value) => acc + "," + value);
  return output;
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  let newArray = [element];
  let merge = array.concat(newArray);
  return merge;  
};

const removeNthElement = (index, array) => {
  array.splice(index,1);
};

const numbersToStrings = numbers => {
  const strings = numbers.map(num => {
    return String(num)
  });
  return strings;
};

const uppercaseWordsInArray = strings => {
  const upper = strings.map(str => {
    return str.toUpperCase()
  });
  return upper;
};

const reverseWordsInArray = strings => {
  const reverseString = (str) => str.split("").reverse().join("");
  const result = strings.map(reverseString)
  return result;
};

const onlyEven = numbers => {
  const result = numbers.filter(num => (num % 2) === 0);
  return result;
};

const removeNthElement2 = (index, array) => {
  const arrayCopy = array.map((x) => x);
  arrayCopy.splice(index,1);
  return arrayCopy;
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
