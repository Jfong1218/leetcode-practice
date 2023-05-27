
/**
 * @param {number[]} arr
 * @return {number}
 */
function largestDiff(arr) {
    // your code here
    let difference = 0;
    if (arr.length <= 1){
        return difference
    }
    for (i = 0; i < arr.length+1; i++){
        for (j = i+1; j < arr.length+1; j++){
            if (Math.abs(arr[i]-arr[j]) > difference) {
                // console.log(arr[i] +" and "+ arr[j]+" diff is "+Math.abs(arr[i]-arr[j]))
                difference = Math.abs(arr[i]-arr[j]);
            }
        }
    }
    return difference
  }

  console.log(largestDiff([-1,2,3,10,9]))
  console.log(largestDiff([1,4,33,998,-346,9821,-7843]))