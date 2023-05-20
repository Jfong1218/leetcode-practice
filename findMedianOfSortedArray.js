/**
 * @param {number[]} arr1 - sorted integer array
 * @param {number[]} arr2 - sorted integer array
 * @returns {number}
 */

// combine two arrays
// determine length of array if odd number return median 
function median(arr1, arr2) {
    // your code here
    let combined = []
    let i=0; j=0;
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j] ){
            combined.push(arr1[i]);
            i++;
        }
        else {
            combined.push(arr2[j]);
            j++;
        }
    }
    // console.log(combined)
    // combined = i < arr1.length ? combined.concat(arr1.slice(i)) :combined.concat(arr2.slice(j))
    if (i < arr1.length){
        // console.log("concat1 worked")
        combined = combined.concat(arr1.slice(i))
        // console.log(combined)
    }
    else {
        // console.log("concat2 worked");
        combined = combined.concat(arr2.slice(j));
        // console.log(combined)
    }
    let middle = Math.floor(combined.length/2)
    // console.log(middle)
    if (combined.length % 2 !== 0){
        return combined[middle]
    }
    return ((combined[middle] + combined[middle -1])/2)
  }

console.log(median([49,123,143,152,203,209,228,398,424,547,705,845,850],[11,136,141,209,491,512,612,673,693,768,805,832,934,942,999]))
console.log(median([1,2],[3,4,5]))