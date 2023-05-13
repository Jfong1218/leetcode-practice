/**
 * @param {number[]} arr1 - integers
 * @param {number[]} arr2 - integers
 * @returns {number[]}
 */
function intersect(arr1, arr2) {
    // your code here
    let result = [];
    let i = 0;
    let j = 0;
    if (arr1.length < 1 || arr2.length<1){
        return []
    }
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] === arr2[j]){
            result.push(arr1[i])
            i++
            j++
        }
        else if (arr1[i] < arr2[j]){
            i++
        }
        else{
            j++
        }
    }
    return result
  }

  console.log(intersect(
    [1,2,2,3,4,4],
    [2,2,4,5,5,6,2000]
  ))