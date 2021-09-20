const eqArrays = require('./eqArrays');

  const assertArrayEqual = function(arry1, arry2) {
    if (eqArrays(arry1, arry2)) {
      console.log(`✅ Assertion Passed: ${arry1} === ${arry2}`);
    } else {
      console.log(`🛑 Assertion Failed: ${arry1} !== ${arry2}`);
    }
  }

  module.exports = assertArrayEqual;
  