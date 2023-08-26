
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {any[]} arr
 * @returns {void}
 */

function shuffle(arr) {
    // modify the arr inline to change the order randomly
    // consulting online solutions this method is called the Fisher-Yates shuffle
    for (i=arr.length -1; i>0; i--){
        randomIndex = Math.floor(Math.random() * (i +1))
        //Math.random() will generate a random number between 0 and 1, if we multiply by max number it will generate a random number between 0 and max number.
        // in this case our max is i+1 as we go through our for loop our max will slowly decrease, since i--
        temp = arr[i]
        arr[i] = arr[randomIndex]
        arr[randomIndex]= temp
    }
    console.log(arr)
    return arr
  }

  shuffle([1,2,3,4])