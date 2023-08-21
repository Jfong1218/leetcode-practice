/**
 * @param {number} n - integer
 * @returns {string}
 */
function getNthNum(n) {
    // your code here 
    let num = "1"
    while (n > 1){
        let count = 0;
        let current = "";
        //below for loop is for transforming sequence into num
        for (i=0; i <= num.length; i++){
            if (i === num.length || (i > 0 && num[i] !== num[i-1])) {
                current += count + num[i-1]
                count = 0
            }
            count ++
        }
        num = current
        n--
    }
    console.log(num)
    return num
  }

  getNthNum(1)
  getNthNum(2)
  getNthNum(10)