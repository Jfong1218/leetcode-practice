/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s"; // ( () () )
const expected1 = true;

const str2 = "N(0(p)3"; // ( ( ) 
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k"; // ( ) ) (
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.


/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
    //Your code here
    //for loop to iterate through the given string
    //given paren value to be true, once encounters ( turns false, ) turns true.
    //if enounter ) while true then loop ends return false
    var result = true;
    for (i = 0; i < str.length ; i++){
        if (str[i] == '(') {
            console.log("worked until here")
            result = true
        }
        else if (str [i] == '(' && result == false){
            console.log("elif 1 worked")
            result = false 
        }
        else if (str[i] == ')' && result == false){
            console.log('elif 2 worked')
            result = true
        }
        if (str[i] == ')' && result == true){
            console.log('elif 3 worked')
            return false
        }
        }
    }

console.log(parensValid(str1)) // expected: true
console.log(parensValid(str2)) // expected: false
console.log(parensValid(str3)) // expected: false


/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const strA = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expectedA = true;

const strB = "D(i{a}l[ t]o)n{e";
const expectedB = false;

const strC = "A(1)s[O (n]0{t) 0}k";
const expectedC = false;
 
/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    //Your code here

}
console.log(bracesValid(strA)) // expected: true
console.log(bracesValid(strB)) // expected: false
console.log(bracesValid(strC)) // expected: false

// Message #🐍cohort-spencer
