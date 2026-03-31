class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const length = nums.length
        for(let i = 0; i < length; i++){
            nums[i + length] = nums[i];
        }
        console.log(nums)
        return nums
    }
}
