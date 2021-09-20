const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArrayEqual');


const middle = function(array) {
  if (array.length <= 2) {
    return []
  }
    
  if (array.length % 2 == 1) {
    return [array[parseInt((array.length-1) / 2)]];
  } 

  if (array.length % 2 == 0) {
    return  [array[parseInt((array.length-1) / 2)], array[parseInt((array.length) / 2)]];
  } 
}

module.exports = middle;

