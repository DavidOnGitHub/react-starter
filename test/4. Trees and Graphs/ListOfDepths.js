const { printBinaryTree, Node, SinglyLinkedList, printLinkedList } = require('./common/utils');

const root = new Node(1);
root.setLeft(new Node(2));
root.setRight(new Node(3));
root.left.setLeft(new Node(4));
root.right.setLeft(new Node(6));
root.right.setRight(new Node(7));
root.left.left.setLeft(new Node(8));
root.right.right.setLeft(new Node(9));

const listOfDepths = (root) => {
  const nodeQueue = new SinglyLinkedList({ level: 0, node: root });
  const linkedLists = []

  while (!nodeQueue.isEmpty()) {
    const item = nodeQueue.remove()
    if (!linkedLists[item.level]) linkedLists[item.level] = new SinglyLinkedList()
    linkedLists[item.level].add(item.node)

    if (item.node.left) nodeQueue.add({ level: item.level + 1, node: item.node.left })
    if (item.node.right) nodeQueue.add({ level: item.level + 1, node: item.node.right })
  }

  return linkedLists
}
const linkedLists = listOfDepths(root);

linkedLists.forEach(list => printLinkedList(list));
