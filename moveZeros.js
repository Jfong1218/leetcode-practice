
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {Array<any>} list
 * @returns {void}
 */
function moveZeros(list) {
    // your code here
    let count = 0
    for (i=0; i<list.length; i++){
        if (list[i] !== 0){
            [list[i], list[count]] = [list[count], list[i]]
            count++
        }
    }
    return list
  }

  console.log(moveZeros([1,0,0,2,3]))
  console.log(moveZeros([0,0,0,1,3,2,6]))

// [0,0,0,1,3,2,6] spec  , expects [1,3,2,6,0,0,0] but got [0,0,0,1,3,2,6]

// [1,2,3,0,0,0,6] spec  , expects [1,2,3,6,0,0,0] but got [1,2,3,0,0,0,6]

// [0,0,0,1,0,0,2,0,0,3,0,0,0,6,0,0] spec  , (diff is too big, full diff )

// [0,0,0,1,1,0,0,0,2,0,0,1,1,0,0,3] spec  , (diff is too big, full diff )