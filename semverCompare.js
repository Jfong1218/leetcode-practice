/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
    // your code here
    const arr1 = v1.split('.').map(Number);
    const arr2 = v2.split('.').map(Number);
    for (i = 0; i < arr1.length ; i++){
        if (arr1[i] > arr2[i]) return 1
        if (arr1[i] < arr2[i]) return -1
    }
    return 0
  }

  console.log(compare('12.1.0', '12.0.9'))
  console.log(compare('5.0.1', '5.0.1'))