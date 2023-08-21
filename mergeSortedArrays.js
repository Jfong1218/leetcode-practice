/**
 * @param {number[][]} arrList
 * non-descending integer array
 * @return {number[]} 
 */
function merge(arrList) {
    // your code here
    let finalArr = []
    for (i = 0; i < arrList.length; i++){
        for (j=0; j < arrList[i].length; j++){
            finalArr.push(arrList[i][j])
        }
    }
    finalArr.sort(function(a,b){return a - b})
    return (finalArr)
  }

  merge(
    [
      [1,1,1,100,1000,10000],
      [1,2,2,2,200,200,1000],
      [1000000,10000001],
      [2,3,3]
    ]
  )
  merge ([[3],[2],[1]])