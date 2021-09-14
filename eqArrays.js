const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}; 

const eqArrays = function(arr1, arr2) {
  let result;
  if (arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index])) {
  result = true;
  } else {
  result = false;
  }
  return result;
  };

  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);