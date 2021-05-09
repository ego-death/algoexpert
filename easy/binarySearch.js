function binarySearch(array, target) {
    // Write your code here.
      let left = 0, right = array.length - 1;
      return binarySearcher(left, right, array, target);
  } //O(logn) time | O(1) space
  
  function binarySearcher(left, right, array, target) {
      if(left > right) return -1;
      let middle = Math.floor((left + right)/2);
      if(target == array[middle]) return middle;
      else if(target < array[middle]) {
          return binarySearcher(left, middle-1, array, target);
      } else {
          return binarySearcher(middle+1, right, array, target);
      }
  }