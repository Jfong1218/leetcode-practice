/**
 * @param {string} str
 * @return {string}
 */
function compress(str) {
    // your code here
    let result = []
    let count = 0
    for (let i = 0; i < str.length; i++){
        count++;
        if (str[i] !== str[i+1]){
            result.push(str[i])
            if (count > 1){
                result.push(count);
            }
            count = 0;
        }
    }
    return result.join('')
  }

  console.log(compress('aaabbaccddde'))
//   console.log(compress('aaab'))

//   "aaabbaccddde" spec  , expects "a3b2ac2d3e" but got "a3b2ac3d3e"