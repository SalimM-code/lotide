const tail = require('../tail');
const assertEqual = require('../assertEqual');


const words = ["yo yo", "Lighthouse", "Labs"];
console.log(assertEqual(tail(words).length, 3));