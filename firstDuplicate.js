/**
 * @param {string} str
 * @return {string | null}
 */
function firstDuplicate(str) {
    // your code here
    let array = [];
    for (char of str){
        console.log(char)
        if (array.includes(char)){
            return char
        }
        else {
            array.push(char)
        }
    }
    return null
  }

console.log(firstDuplicate('abca'))