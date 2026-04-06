class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        //stacks LIFO
        const response = [];
        const length = operations.length;
        for (let i = 0; i < length; i++) {
            switch (operations[i]) {
                case "+":
                    response.push(response[i - 2] ?
                        response[i - 2] :
                        0 + response[i - 1]);
                    break;
                case "D":
                    response.push(response[response.length - 1] * 2)
                    break;
                case "C":
                    response.pop();
                    break;
                default:
                    response.push(+operations[i])
            }
        }
        return response.reduce((acumulator, currentValue) => {
            return acumulator + currentValue
        }, 0)
    }
}