const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


const words = ["yo yo", "Lighthouse", "Labs"]
const tail = function(arry) {
  arry.shift();
  const newArry = arry;
  return newArry;
}

console.log(assertEqual(tail(words).length, 3));