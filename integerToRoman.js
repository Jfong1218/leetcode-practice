/**
 * @param {number} integer
 * @returns {string} str - roman numeral string
 */
function integerToRoman(num) {
    // your code here
    let hashmap = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    }
    const keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let result = ""
    for (i = 0; i < keys.length; i++) {
        while (num >= keys[i]){
            result += hashmap[keys[i]]
            num -= keys[i];
        }
    }
    return result
}
  
console.log(integerToRoman(123))
console.log(integerToRoman(1999))
console.log(integerToRoman(3420))