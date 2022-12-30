/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";


/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
// function reverseString(str) {
//     return str.split("").reverse().join("");
    /* introduce empty string*/
    /* use a loop to reverse the given string*/
    /*return reversed string*/
// }

function reverseString(str) {
    /* introduce empty string*/
    var result="";
    /* use a loop to reverse the given string*/
    for (i=str.length-1; i>=0; i--){
        // console.log(str.length-1);
        result = result + str[i];
    }
    /*return reversed string*/
    return result
}

console.log(reverseString(str1)); // "erutaerc"
console.log(reverseString(str2)); // "god"
console.log(reverseString(str3)); // "olleh"
console.log(reverseString(str4)); // ""

/*****************************************************************************/