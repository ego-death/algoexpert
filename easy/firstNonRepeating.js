function firstNonRepeatingCharacter(string) {//brute force
    // Write your code here.
    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < string.length; j++) {
            if (i == j) continue;
            if (string[i] == string[j]) break;
        }
        if (j == string.length) return i;
    }
    return -1;
} //O(n^2) time | O(1) space where n is the number of characters in the string

function firstNonRepeatingCharacter(string) {
    // Write your code here.
    let hashMap = {};
    for (let i = 0; i < string.length; ++i) {
        if (!hashMap[string[i]]) {
            hashMap[string[i]] = { val: 1, idx: i };
        } else {
            hashMap[string[i]].val += 1;
        }
    }
    for (let i = 0; i < string.length; ++i) {
        if (hashMap[string[i]].val === 1) {
            return hashMap[string[i]].idx;
        }
    }
    return -1;
} //O(n) time | O(1) space due ot maximum of 26 characters being stored in the hashmap
