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
  // your code here
};

const numbersToStrings = numbers => {
  // your code here
};

const uppercaseWordsInArray = strings => {
  // your code here
};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
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
