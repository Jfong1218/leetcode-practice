
/**
 * @param {string} str
 * @return {string}
 */
function longestUniqueSubstr(str) {
    // your code here
    let result = ""
    for (i=0; i < str.length; i++){
        let currentLetter = str[i]
        let currentLine = currentLetter
        for (j = i+1; j < str.length; j++){
            if (currentLine.indexOf(str[j])=== -1){
                currentLine += str[j]
            }
            else{
                if (currentLine.length > result.length){
                    result = currentLine
                    return result
                }
                return result
            }
        }
    }
    return result
  }