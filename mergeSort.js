// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
 function merge(left = [], right = []) {
    let newArr = []
    let length = 0
    let j = 0;
    //determining the longer array
    if (left.length > right.length){
      length = left.length
    }
    else {
      length = right.length
    }
    for (let i = 0; i < length ; i++){
      if (left[i] < right[j]) {
        newArr.push(left[i])
      }
      if (left[i] > right[j]) {
        newArr.push(right[j])
        j++
      }
    }
    return newArr
  }

  function merge(left = [], right = []) {
    let arrC = []
    let leftpointer = 0;
    let rightpointer = 0;
    while (leftpointer < left.length && rightpointer < right.length) {
  
      if (left[leftpointer] < right[rightpointer]) {
        arrC.push(left[leftpointer]);
        leftpointer++;
      }
      else {
        arrC.push(right[rightpointer]);
        rightpointer++;
      }
  
    }
    if (leftpointer < left.length) {
      for (let i = leftpointer; i < left.length; i++) {
        arrC.push(left[i]);
      }
    }
    else {
      for (let j = rightpointer; j < right.length; j++) {
        arrC.push(right[j]);
      }
    }
    return arrC;
  }

console.log(merge(sortedA1, sortedB1))
console.log(merge(sortedA2, sortedB2)) //[2]
console.log(merge(sortedA3, sortedB3))
console.log(merge(sortedA4, sortedB4))