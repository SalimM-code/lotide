const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// implement a function called findkey that will take 2 parameter
// an object and callback
// invoke the function and pass it its arg
// loop through the object and grab all the keys
// return the first key that return a truthy value from callback

const findkey = (obj, callBckFunc) => {
  for (let key in obj) {
    // console.log(obj)
    // console.log(key)
    if(callBckFunc(obj[key])) {
      return key;
    }
    
  }
}

console.log(findkey({
  a: "salim",
  b: "ayan",
  c: "zuleykha",
  d:"yusra"
}, x => x === "yusra"));

(assertEqual(findkey({
  a: "salim",
  b: "ayan",
  c: "zuleykha",
  d:"yusra"
}, x => x === "yusra"), "d"));

module.exports = findkey;