/**
 * @param {string} str
 * @returns {string | string[]}
 */

function count(str) {
  // your code here
    let hashmap = {};
    let result = [];
    let counter = 0;
    let string = str.split("")
    for (i = 0; i < string.length; i++){
        if (!hashmap[string[i]]){
            hashmap[string[i]] = 1;
        }
        else {
            hashmap[string[i]] += 1;
        }
    }
    // console.log(Object.keys(hashmap))
    // console.log(Object.values(hashmap))
    for (key in hashmap) {
        if (hashmap[key] > counter){
            counter = hashmap[key];
            result = key;
        }
        else if (hashmap[key] === counter){
            result = [...result, key]
        }
    }
    return result
}


console.log(count('abbccc'))
// 'c'

console.log(count('abbcccddd'))
// ['c', 'd']