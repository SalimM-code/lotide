const assertEqual = require('./assertEqual');

const tail = function(arry) {
  arry.shift();
  return arry;
};


module.exports = tail;

