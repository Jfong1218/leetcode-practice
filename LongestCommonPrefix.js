/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let LongestPrefix = ""
    //base condition if strs is empty
    if (strs.length == 0 || strs == null){
        return LongestPrefix
    }
    //find shortest minimum as a starting point for comparison
    let minimum = strs[0].length
    for (let i = 0; i < strs.length; i++){
        minimum = Math.min(minimum, strs[i].length)
    }
    //compare current and populate LongestPrefix
    for (let i = 0; i < minimum; i++) {
        //setting the first char to compare
        let current = strs[0][i]
        //comparing the current to all the words in strs
        for ( let j = 0; j < strs.length; j++){
            if (current != strs[j][i]){
                return LongestPrefix
            }
        }
        LongestPrefix += current
        
    }
    return LongestPrefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))