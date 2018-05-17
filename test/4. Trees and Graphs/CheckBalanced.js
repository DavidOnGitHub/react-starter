const { printBinaryTree, Node, SinglyLinkedList } = require('./common/utils');

const root = new Node(1);
root.setLeft(new Node(2));
root.setRight(new Node(3));
root.left.setLeft(new Node(4));
root.left.setRight(new Node(5));
root.right.setLeft(new Node(6));
root.right.setRight(new Node(7));
root.left.left.setLeft(new Node(8));
root.right.right.setLeft(new Node(9));
root.left.left.left.setLeft(new Node(10));
// root.left.left.setRight(new Node(11));
root.left.left.left.setRight(new Node(12));


const isBalanced = (root) => {
  let leafLevel = -1
  const nodeQueue = new SinglyLinkedList()

  nodeQueue.add({ level: 0, node: root })

  while (!nodeQueue.isEmpty()) {
    const item = nodeQueue.remove()
    if (leafLevel >= 0 && item.level > leafLevel + 1) return false

    if (leafLevel < 0 && isLeafOrSemiLeaf(item.node)) leafLevel = item.level
    if (item.node.left) nodeQueue.add({ level: item.level + 1, node: item.node.left })
    if (item.node.right) nodeQueue.add({ level: item.level + 1, node: item.node.right })
  }
  return true
}

const isLeafOrSemiLeaf = node => !node.left || !node.right

printBinaryTree(root)
console.log(isBalanced(root));
