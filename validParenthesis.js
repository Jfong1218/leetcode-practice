
/**
 * @param {string} str
 * @return {boolean} 
 */
function validate(str) {
    // your code here
    let hashmap ={
        '(':')',
        '[':']',
        '{':'}'
    };
    let stack = [];
    for (let char of str){
        let last = stack.at(-1);
        if (hashmap[last]===char){
            console.log("popped at "+char)
            stack.pop();
            console.log(stack)
        }
        else{
            console.log("added "+char)
            stack.push(char)
            console.log(stack)
        }
    }
    return stack.length === 0;
  }

//   validate('{}[]()') 
// true

// validate('{[()]}') 
// // true

// validate('{[}]') 
// // false, they are not in the right order

validate('{}}') 
// // false, last `}` is not paired with `{`
