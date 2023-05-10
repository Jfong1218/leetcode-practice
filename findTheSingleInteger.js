/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
    // your code here
    let hash = {}
    for (i=0; i < arr.length; i++){
        if (hash.hasOwnProperty(arr[i])){
            hash[arr[i]] += 1
        }
        else {
            hash[arr[i]] = 0
        }
    }
    return Number(Object.keys(hash).find(key => hash[key] === 0))
  }

const arr = [10,2,2,1,0,0,10]
console.log(findSingle(arr))