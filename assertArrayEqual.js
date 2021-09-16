const eqArrays = function(arr1, arr2) {
  let result;
  if (arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index])) {
  result = true;
  } else {
  result = false;
  }
  return result;
  };

  const assertArrayEqual = function(arry1, arry2) {
    if (eqArrays(arry1, arry2)) {
      console.log(`✅ Assertion Passed: ${arry1} === ${arry2}`);
    } else {
      console.log(`🛑 Assertion Failed: ${arry1} !== ${arry2}`);
    }
  }

  assertArrayEqual([1,2,3], [1,2,3]);