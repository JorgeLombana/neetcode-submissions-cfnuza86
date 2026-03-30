class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        const length = nums.length;
        let k = 0;
        for (let i = 0; i < length; i++) {
            if (nums[i] !== val) {
                nums[k] = nums[i];
                k++;
            }
        } return k;
    }
}
// console.log(`nums[i] !== val value: ${nums[i]}`)
// console.log(`value i: ${i}, value k: ${k}`)
// console.log(`values after operation: i: ${i},  k: ${k}`)
// console.log(`nums[i] === val value: ${nums[i]}`)
// console.log(`value i: ${i}, value k: ${k}`)
// console.log(`values after operation: i: ${i},  k: ${k}`)
