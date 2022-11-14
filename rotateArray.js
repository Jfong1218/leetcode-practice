/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//this solution works but exceeds leetcode's time limit it has to be done in o(1)
//  var rotate = function(nums, k) {
//     if (k > 0){
//         let temp = nums[nums.length-1]
//         nums.pop()
//         nums.unshift(temp)
//         k--
//     }
//     else {
//         return nums
//     }
//     return rotate(nums, k)
// };

var rotate = function(nums, k) {
    newK = k%nums.length
    let temp = 0
    let l = 0
    let r = nums.length - 1
    while (l < r){
        temp = nums[r]
        nums[r] = nums[l]
        nums[l] = temp
        l++
        r--
    }
    l = 0
    r = newK-1
    while (l < r){
        temp = nums[r]
        nums[r] = nums[l]
        nums[l] = temp
        l++
        r--
    }
    l = newK 
    r = nums.length - 1
    while (l < r){
        temp = nums[r]
        nums[r] = nums[l]
        nums[l] = temp
        l++
        r--
    }
    return nums
}
nums = [1,2,3,4,5,6,7]
k = 3
console.log(rotate(nums, k))
