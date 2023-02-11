/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hashmap ={};
    for (const s of strs) {
        console.log(s)
        const key = s.split("").sort().join();
        // console.log(key)
        if (hashmap[key]){
            hashmap[key].push(s)
        }
        else {
            hashmap[key] = [s]
        }
    }
    console.log(hashmap)
    return Object.values(hashmap)
};

var strs1 =["eat","tea","tan","ate","nat","bat"]
groupAnagrams(strs1)