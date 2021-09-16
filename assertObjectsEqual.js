const eqObjects = function(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  let output;
  
    if (obj1Keys.length !== obj2Keys.length) {
      output = false;
    }
    
  
    for (const keys in obj1Keys) {
      if(!obj1Keys[keys] === obj1 && obj1Keys[keys] === obj2) {
      output = false
      } else {
      output = true
      };
    } 
    
    return output;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  
};

console.log(assertObjectsEqual({a: "y"}, {a: "y"}));