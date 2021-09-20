const { assert } = require('chai');
const tail = require('../tail');

describe('#Tail', () => {
  it("it return ['two', 'three'] when given ['one', 'two', 'three']", () => {
    let result = tail(['one', 'two', 'three']);
    assert.deepEqual(result, ['two', 'three']);
  });

  it("return [2, 3, 4] when given [1, 2, 3, 4]", () => {
    let result = tail([1,2,3,4]);
    assert.deepEqual(result, [2,3,4]);
  });

  it("return 3 when given ['yo yo', 'Lighthouse', 'Labs']", () => {
    let words = ["yo yo", "Lighthouse", "Labs"];
    result = tail(words);
    assert.deepEqual(result.length, 2);
    
  })
})

// console.log(assertEqual(tail(words).length, 3));