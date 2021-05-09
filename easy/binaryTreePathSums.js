class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

function branchSums(root) {
    let results = [];
    calculateSums(root, 0, results);
    return results;
}

function calculateSums(node, sum, results) {
    if(!node) {
        return null;
    }
    sum += node.value;
    if(!node.left && !node.right) {
        results.push(sum);
        return null;
    }
    calculateSums(node.left, sum, results);
    calculateSums(node.right, sum, results);
    return null;
}