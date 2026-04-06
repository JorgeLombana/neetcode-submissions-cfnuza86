class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const length = s.length
        let isValid = false;
        for (let i = 0; i < length; i++) {
            isValid = true;

            if (s[i] == '(') {
                if (!(s[s.length - 1 - i] == ')')) {
                    isValid = false;
                    break;
                }
            }
            if (s[i] == '{') {
                if (!(s[s.length - 1 - i] == '}')) {
                    isValid = false;
                    break;
                }
            }
            if (s[i] == '[') {
                if (!(s[s.length - 1 - i] == ']')) {
                    isValid = false;
                    break;
                }
            }

        }

        return isValid;
    }
}
