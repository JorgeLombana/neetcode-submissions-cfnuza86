class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        //brute force solution
        const length = nums.length;
        let consecutiveOnes = 0;

        for (let i = 0; i < length; i++) {
            let counter = 0;

            for (let j = i; j < length; j++) {
                if (nums[j] === 1) {
                    counter++;
                } else {
                    consecutiveOnes = Math.max(consecutiveOnes, counter);
                    counter = 0;
                }
            }
            consecutiveOnes = Math.max(consecutiveOnes, counter);
        }
        return consecutiveOnes
    }
}
