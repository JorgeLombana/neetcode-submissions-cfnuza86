class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxConsecutiveOnes = 0;
        let counter = 0;
        for (let i = 0; i < nums.length; i++) {
            if (i == 0) {
                if (nums[i] === 1) {
                    counter++
                    console.log({ i })
                }
            } else {
                if (nums[i] === 1 && nums[i - 1] === 1) {
                    counter++;
                    console.log(`counter: ${cou}`)
                }else{
                    if(counter > maxConsecutiveOnes){
                        maxConsecutiveOnes = counter;
                    }
                    counter = 0;
                    console.log(`0 found, max consecutive ones: ${maxConsecutiveOnes}`)
                }
            }
        }
    }
}
