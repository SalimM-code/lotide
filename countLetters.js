const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};



const countLetters = function(str) {
  const output = {};
  
  for (const char of str) {
  
    console.log(char)
    if (char !== ' ') {
      if(output[char]) {
      output[char] += 1;
      } else {
      output[char] =1
    }
    }
    
    
  
  
  }
  console.log(output)
  return output
  }
  