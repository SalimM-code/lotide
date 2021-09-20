const middle = require('../middle');
const { assert } = require('chai');

describe('#middle', () => {
  it("return [2] when given [1,2,3]", () => {
    let result = middle([1,2,3]);
    assert.deepEqual(result, [2]);
  });

  it("return 'salim' when given ['Hello', 'salim', 'mustafa']", () => {
    let result = middle(['Hello', 'salim', 'mustafa']);
    assert.deepEqual(result, ['salim'])
  })
})