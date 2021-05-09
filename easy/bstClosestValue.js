function findClosestValueInBst(tree, target) {
    // Write your code here.
      let diff = tree.value - target;
      return find(tree, target, diff);
  }
  
  function find(node, target, diff) {
      if(!node) {
          return target+diff;
      }
      if(Math.abs(diff) > Math.abs(node.value-target)) {
          diff = node.value - target;
      }
      console.log(node.value);
      if(target < node.value) {
          return find(node.left, target, diff)
      }
      else {
          return find(node.right, target, diff);
      }
  } //O(logN) time | O(logN) space
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  