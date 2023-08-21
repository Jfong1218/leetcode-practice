

/**
 * @param {string} str
 * @returns {boolean}
 */
function validateNumberString(str) {
    // your code here
    //edge case if string is empty
    let len = str.length
    if (len == 0) return false;

    let digits = new Set('1234567890');
    //invalid preconditions
    if (len === 1  && !digits.has(str[0])) return false
    //test on whether or not we have a trailing e
    if (str[len - 1] === 'e' || str[len-1] === 'E') return false

    let hasP = false
    let hasE = false
    let hasS = false
    let i = 0
    //test if string starts with - or +
    if (str[0] === "-" || str[0] === "+") i = 1;
    while (i < len){
        let char = str[i]
    //test if string char is - for exponential
        if (char ===  "-"){
            if (str[i-1] === "e" || str[i-1] === "E"){
                i++ 
                continue
            }
            console.log('false from first')
            return false
        }
    //test if string contains .
        if (char === "."){
            // testing hasE here incase we have decimal in power notation
            if (hasP || hasE){
                console.log('false from second')
                return false
            }
            i++
            hasP = true
            continue;
        }
    //test if string contains e
        if (char === 'e' || char === 'E'){
            if (hasE) return false
            if (!digits.has(str[i-1])) return false
            hasE = true
            i++
            continue;
        }
    //test if char is a number
        if (!digits.has(char)) return false
        i++
        continue
    }
    return true
  }
  
console.log(validateNumberString('12345'))
console.log(validateNumberString('12.589'))
console.log(validateNumberString('10e145'))
console.log(validateNumberString('1.4e16'))
console.log(validateNumberString('-12de3'))
console.log(validateNumberString('-1234'))
  