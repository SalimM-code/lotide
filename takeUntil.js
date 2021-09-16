const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = (someArray, callBckFunc) => {
  const output = [];
  for (let item of someArray) {

    if (!callBckFunc(item)) {
      output.push(item)
    } else {
      break;
    }
  }

  return output;
}

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);


// as soon as our callBckFunc return true we stop pushing into new array.