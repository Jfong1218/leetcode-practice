/**
 * @param {any} x
 * @return {number}
 */
function mySqrt(x) {
    // your code here   
    if ( x < 0 || isNaN(x)){
        return NaN
    }
    if (x == 1){
        return 1
    }
    let low = 1
    let high = x/2
    let mid = Math.floor((low + high)/2)
    while (low <= high){
        if (mid*mid == x ){
            return mid
        }
        if (mid*mid < x) {
            low = mid + 1
        }
        else {
            high = mid - 1
        }
    }
    return high
  }