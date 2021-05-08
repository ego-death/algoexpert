function sortedSquaredArray(array) {
    // Write your code here.
    return array.map(el => el ** 2).sort((a, b) => a - b);
} //O(nlog(n) + n) -> asymptotically equal to O(nlog(n)) time | O(1) space
//where n is number of elements

function sortedSquaredArray(array) {
    // Write your code here.
    let idx = array.length - 1;
    let squares = [];
    let left = 0, right = array.length - 1;
    for (let i = 0; i < array.length; ++i) {
        if (Math.abs(array[left]) < Math.abs(array[right])) {
            squares[idx] = array[right] ** 2;
            right--;
        } else {
            squares[idx] = array[left] ** 2;
            left++;
        }
        idx -= 1;
    }
    return squares;
} //O(n) time | O(n) space where n is the number of elements in the array
