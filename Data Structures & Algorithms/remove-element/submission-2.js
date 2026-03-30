class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let lenght = nums.length;
        let i = 0;
        while (i < lenght) {
            if (nums[i] == val) {
                nums[i] = nums[--lenght]
            } else {
                i++
            }
        }
        return lenght
    }
}
