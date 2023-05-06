/**
 * @param {string} input
 * @returns string
 */
// remove all b and ac
// removeChars('ab') // 'a'
// removeChars('abc') // ''
// removeChars('cabbaabcca') // 'caa'


function removeChars(input) {
    // your code here
    input = input.replaceAll('b', "");
    while (input.includes('ac')){
        input = input.replaceAll('ac', "")
    }
    return input
}

console.log(removeChars('ab'))
console.log(removeChars('abc'))
console.log(removeChars('cabbaabcca'))