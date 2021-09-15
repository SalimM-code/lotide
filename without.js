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
      console.log(`Assertion Passed: ${arry1} === ${arry2}`);
    } else {
      console.log(`Assertion Failed: ${arry1} !== ${arry2}`);
    }
  }

  const without = function(sourceArray, itemsToRmArray) {
    let i = 0;
    let newArray = [];
    while (i < sourceArray.length) {

      if(!itemsToRmArray.includes(sourceArray[i])){
        newArray.push(sourceArray[i])
      }
      i++;
    }
    return newArray;
  }

  console.log(without([1, 2, 3], [1])) // => [2, 3])
  console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

  without([1, 2, 3], [1]); // => [2, 3]
  console.log(without(["1", "2", "3"], ["1", "2", "3"])); // => []
  
  const words = ["hello", "world", "lighthouse"];
  console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  assertArrayEqual(words, ["hello", "world", "lighthouse"]);
  