/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
function getIntersection(arr1, arr2) {
    // your code here
    let result = []
    if (arr1.length < 1 || arr2.length <1){
        return []
    }
    for (i = 0; i <= arr1.length; i++){
        for (j = 0; j < arr2.length; j++){
            if (arr1[i] == arr2[j] && !result.includes(arr1[i])){
                // console.log(j)
                // console.log("match found at"+i)
                result.push(arr1[i])
            }
            // console.log("i is "+arr1[i]+ "j is "+arr2[j]+" not a match")
        }
    }
    return result
  }
  arr1=[1,2,3,4,5,7]
  arr2=[2,3,4,5,6,7]
  arr3=[1,2,88]
  arr4=[1,2,3,5,6,88,12]
  arr5=[8,7,6,5,3,2]
  arr6=[4,5,9,7,1,2]
  console.log(getIntersection(arr1, arr2))
  console.log(getIntersection(arr3, arr4))
  console.log(getIntersection(arr5, arr6))