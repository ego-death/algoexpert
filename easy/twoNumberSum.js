function twoNumberSum(array, targetSum) {
    // Write your code here.
      let numSeen = {};
      for(let i=0;i<array.length;++i) {
          let complement = targetSum - array[i];
          if(complement in numSeen) {
              return [complement, array[i]];
          } else {
              numSeen[array[i]] = 1;
          }
      }
      return []; //take care of edge cases always. they said AT MOST one to be found.
  } //O(n) time | O(n) space where n is number of elements

//practicing brute force solution
function twoNumberSum(array, targetSum) {
    // Write your code here.
      for(let i=0;i<array.length;++i) {
          for(let j=i+1;j<array.length;++j) {
              if(array[i] + array[j] === targetSum) {
                  return [array[i], array[j]];
              }
          }
      }
      return [];
  } //O(n^2) time | O(1) space where n is the number of elements
  