const { printBinaryTree, Node, SinglyLinkedList } = require('./common/utils');

const root = new Node(14);
root.setLeft(new Node(5));
root.setRight(new Node(22));
root.left.setLeft(new Node(2));
root.left.setRight(new Node(8));
root.right.setLeft(new Node(18));
root.right.setRight(new Node(30));
root.left.left.setLeft(new Node(1));
root.left.right.setRight(new Node(12));
root.right.left.setLeft(new Node(16));


const isBST = (root) => {
  if (root === null) return false
  if (root.left === null && root.right === null) return false
  return !!minMax(root)
}

const minMax = node => {
  let leftMinMax, rightMinMax
  if (!node.left) {
    leftMinMax = { min: node.value, max: node.value }
  } else {
    leftMinMax = minMax(node.left)
  }
  if (leftMinMax === false) return false

  if (!node.right) {
    rightMinMax = { min: node.value, max: node.value }
  } else {
    rightMinMax = minMax(node.right)
  }
  if (rightMinMax === false) return false

  if (leftMinMax.max > node.value || rightMinMax.min < node.value) return false

  return { min: leftMinMax.min, max: rightMinMax.max}
}
const maxVal = node => {
  if (!node) return null
  const leftMax = maxVal(node.left)
  if (leftMax === false) return false
  const rightMax = maxVal(node.right)
  if (rightMax === false) return false

  if (rightMax === null) {
    if (leftMax !== null && leftMax > node.value) return false
    return node.value
  }

  if (leftMax === null) {
    if (rightMax < node.value) return false
    return rightMax
  }
  if (leftMax > node.value || rightMax < node.value) return false
  return rightMax
}

printBinaryTree(root)
console.log(isBST(root));
