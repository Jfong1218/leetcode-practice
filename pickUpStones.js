/** 
 * @param {number} n
 * @return {'A' | 'B' | null}
 */
function canWinStonePicking(n) {
    // your code here
    if (n === 0) {
      return null;
    }
    return n % 3 === 1 ? 'B' : 'A';
  }