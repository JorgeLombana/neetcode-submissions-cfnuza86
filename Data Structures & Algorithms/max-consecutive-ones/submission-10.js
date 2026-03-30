class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxConsecutiveOnes = 0;
        let count = 0;
        const length = nums.length;

        for (let i = 0; i < length; i++) {
            count = (nums[i] === 1) ? ++count : 0;
            maxConsecutiveOnes = Math.max(count, maxConsecutiveOnes);
        }

        return maxConsecutiveOnes
    }
}