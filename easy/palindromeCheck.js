//method solution:
function isPalindrome(string) {
    // Write your code here.
    return string.split("").reverse("").join("") == string;
} //O(n) time complexity | O(1) space complexity

console.log(isPalindrome('abcdcba'));

//other solution:
function isPalindrome2(string) {
    // Write your code here.
    let left = 0, right = string.length - 1;
    while (left < right) {
        if (string[left] !== string[right]) return false;
        left += 1;
        right -= 1;
    }
    return true;
} //O(n) time | O(1) space where n is the number of characters

console.log(isPalindrome2('abcdbba'));