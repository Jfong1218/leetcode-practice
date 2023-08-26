/**
 * @param {number} num
 */
function sum(num) {
    // your code here
    let result = function (x){
        return sum(x + num)
    }
    console.log(result)   //prints result before valueOf
    result.valueOf = () => num  //needs valueOf in order to compare object to primitive value
    console.log(result)   //prints result after valueOf
    return result
  }

  const sum1 = sum(1)
  console.log(sum(2))