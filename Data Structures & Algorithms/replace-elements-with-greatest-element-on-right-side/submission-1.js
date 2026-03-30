class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const length = arr.length;
        let max = -1;
        let res = new Array(length);
        console.log(length, arr)

        for (let i = length - 1; i >= 0; i--) {
            res[i] = max;
            max = Math.max(max, arr[i])
        }
        return res
    }
}
