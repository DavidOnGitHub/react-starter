const { printBinaryTree, Node, SinglyLinkedList } = require('./common/utils');

const root = new Node(14);
const node5 = new Node(5)
const node22 = new Node(22)
const node2 = new Node(2)
const node8 = new Node(8)
const node18 = new Node(18)
const node30 = new Node(30)
const node1 = new Node(1)
const node12 = new Node(12)
const node16 = new Node(16)

root.setLeft(node5);
root.setRight(node22);
root.left.setLeft(node2);
root.left.setRight(node8);
root.right.setLeft(node18);
root.right.setRight(node30);
root.left.left.setLeft(node1);
root.left.right.setRight(node12);
root.right.left.setLeft(node16);

const getLargerParent = node => {
  if (!node) return null
  if (node.parent && node.parent.value < node.value) {
    return getLargerParent(node.parent)
  }
  return node.parent
}

const leftMostNode = node => {
  if (!node.left) return node
  return leftMostNode(node.left)
}

const successor = node => {
  if (!node.right) return getLargerParent(node)

  return leftMostNode(node.right)
}

printBinaryTree(root)
console.log(successor(node12).value);
