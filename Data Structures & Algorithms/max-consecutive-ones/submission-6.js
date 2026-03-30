class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findMaxConsecutiveOnes(nums) {
    let maxConsecutiveOnes = 0;
    let count = 0;
    for (let number of nums) {
      if (number === 0) {
        maxConsecutiveOnes = Math.max(count, maxConsecutiveOnes);
        count = 0;
      } else {
        count++
      }
    }
    return Math.max(count, maxConsecutiveOnes);
  }
}
