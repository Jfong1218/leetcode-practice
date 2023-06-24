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
    let low = 0
    let high = x/2
    while (low <= high){
        let mid = Math.floor((low + high)/2)
        let square = mid*mid
        if (square == x ){
            return mid
        }
        if (square < x) {
            low = mid + 1
        }
        else {
            high = mid - 1
        }
    }
    return high
  }

  console.log(mySqrt(4))