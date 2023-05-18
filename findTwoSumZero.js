
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function findTwo(arr) {
    // your code here
    for (i=0; i<arr.length;i++){
        for (j=0; j<arr.length; j++){
            if (arr[i]+arr[j]=== 0){
                return [i,j]
            }
        }
    }
    return null
  }

console.log(findTwo([1,2,3,-1]))
console.log(findTwo([1,2,3,-1,-2,0]))
console.log(findTwo([1,2,3,4]))