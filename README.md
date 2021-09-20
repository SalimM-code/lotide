# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @salimcodes/lotide`

**Require it:**

`const _ = require('@salimcodes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: returns head of Array
  `tail()`: return tail of Array
  `middle()`: returns middle of Array
  `assertArrayEqual()`: asserts if two Array are equal
  `assertEqual()`: asserts if actual data equal expected
  `assertObjectsEqual()`: asserts if two objects are equal
  `countLetters()`: returns a count of letters
  `countOnly()`: checks how many times a string or number appears 
  `eqArrays()`: take in two array and compare
  `eqObjects()`: take two object and compare
  `findKey()`: Returns a key of an object
  `findKeyByValue()`: finds key based on its value
  letterPositions,
  `map()`: works same as .map()
  takeUnitl(): loops through array pushing data to a new array till condition is met
  without(): removes data from an array and push remaining into a new array
