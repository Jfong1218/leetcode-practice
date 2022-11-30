var arr2d = [ [2, 5, 8],
            [3, 6, 1],
            [5, 7, 7] ];
// console.log(arr2d[0,2].length)

function isPresent2d(arr2d,value) {
    for (i=0;i<=arr2d.length-1; i++) {
        // console.log("worked till 7")
        for (x=0; x<=arr2d[i].length-1; x++) {
            // console.log("worked until 9")
            if (arr2d[i][x]== value){
                // console.log("we have a match at " +i + x)
                return (true)
            }
        }
    }
    return(false)
}
// isPresent2d(arr2d,1)
console.log(isPresent2d(arr2d,9))

// complete the following function
function flatten(arr) {
    var flat = [];
    for (var i = 0; i <= arr.length -1; i++){
        for (var x = 0; x <= arr[i].length -1; x++) {
            flat.push(arr[i][x]);
        }
    }
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result);
