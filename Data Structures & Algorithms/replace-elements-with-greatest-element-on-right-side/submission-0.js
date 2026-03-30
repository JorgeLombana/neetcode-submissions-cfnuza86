class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const length = arr.length;
        let response = [];

        for (let i = 0; i < length; i++) {
            let max = arr[i + 1];

            for (let j = i + 1; j < length; j++) {
                if (max < arr[j]) max = arr[j]
            }
            response.push(max)
        }
        response[length - 1] = -1
        return response

    }
}
