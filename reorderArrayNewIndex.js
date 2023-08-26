/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
    // reorder items inline
    // this solution involves in building a new Array and at the end replace the items array with the newly built array
    // but this solution is not accepted on bigfrontned
    let result = []
    for (i = 0; i < newOrder.length; i++){
        console.log(i)
        result[newOrder[i]] = items[i]
    }
    items = result
    console.log(items)
    return items
}

function swap(arr, i, j){
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function sort(items, newOrder){
    // this solution will need to use the swap function identified above for code cleanliness
    // this solution will be accepted on bigfrontend
    // reason this solution is accepted becasue it modifies items in place 
    for (i = 0; i < newOrder.length; i++){
        if (newOrder[i] != i ){
            swap(items, i, newOrder[i])
            swap(newOrder, i, newOrder[i])
        }
    }
}

const A = ['A', 'B', 'C', 'D', 'E', 'F']
const B = [1,   5,   4,   3,   2,   0]
sort(A,B)