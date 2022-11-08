/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1
    let fast = 1
    let slow = 0
    if (nums.length == 0) {
        return k
    }
    while (fast < nums.length){
        if (nums[fast] != nums[slow]){
            slow++
            nums[slow] = nums[fast]
            k++
        }
        fast ++
    }
    return nums.slice(0,k)
};

nums = [1,1,2]
console.log(removeDuplicates(nums))