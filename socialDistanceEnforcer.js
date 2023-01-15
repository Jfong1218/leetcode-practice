/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
// function socialDistancingEnforcer(queue) {
//  //Your code here
//  //for loop iterate through given queue
//  //counter in the beginning of the loop
//  //return false if count < 6
//     // count = 0
//     // for (i=0; i < queue.length-1; i++){
//     //     if (queue[i] == 1){
//     //         for (j = i+1; j < queue.length -1; j++){
//     //             if (queue[j] == 0){
//     //                 count += 1
//     //             }
//     //             if (count < 6 && queue[j] == 1){
//     //                 count = 0
//     //                 return false
//     //             }
//     //             if (count >= 6 && queue[j] == 1){
//     //                 count = 0
//     //                 i = j - 1
//     //                 break
//     //             }
//     //         }
//     //     }
//     //     count = 0
//     // }
//     // return true
// }

//instructor's answer
function socialDistancingEnforcer(queue) {
    //Your code here
    let firstPersonSeen = false;
    let count = 0
    for (let i = 0; i < queue.length; i++){
        if (queue[i] == 0){
            count++
        } else{
            if (firstPersonSeen && count < 6){
                return false;
            }
            firstPersonSeen = true;
            count = 0;
        }
    }
    return true;
}


console.log(socialDistancingEnforcer(queue1)) // false
console.log(socialDistancingEnforcer(queue2)) // true
console.log(socialDistancingEnforcer(queue3)) // true
console.log(socialDistancingEnforcer(queue4)) // true

/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/
            // 0   1  2  3  4
const numsA = [-2, 5, 7, 0, 3];
const expectedA = 2;

const numsB = [9, 9];
const expectedB = -1;


/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    //Your code here
}

console.log(balanceIndex(numsA)) // 2
console.log(balanceIndex(numsB)) // -1