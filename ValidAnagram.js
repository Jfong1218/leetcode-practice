/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var hash = {}
    var hasht = {}
    if (s.length != t.length) {
        console.log("false from first if")
        return false
    }
    for (i=0; i < s.length; i++){
        if (hash.hasOwnProperty(s[i])) {
            hash[s[i]]++
        }
        else {
            hash[s[i]]=1
        }
    }
    for (i=0; i < t.length; i++){
        if (hasht.hasOwnProperty(t[i])) {
            hasht[t[i]]++
        }
        else {
            hasht[t[i]]=1
        }
    }
    for (i=0; i<s.length; i++) {
        if (hash[s[i]] != hasht[s[i]]){
            return false
        }
    }
    return true
}

isAnagram("anagram", "nagaram")