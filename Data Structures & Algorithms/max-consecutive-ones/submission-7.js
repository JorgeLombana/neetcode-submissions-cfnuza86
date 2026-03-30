class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxConsecutiveOnes = 0;
        let count = 0;

        for (let number of nums) {
            count = (number === 1) ? ++count : 0;
            maxConsecutiveOnes = Math.max(count, maxConsecutiveOnes);
        }

        return maxConsecutiveOnes
    }
}