const { printBinaryTree, Node } = require('./common/utils');

const array = [1, 2, 5, 8, 12, 14, 16, 18, 22, 30];

const minimal = (array, start, end) => {
  if (end < start) {
    return null;
  }

  let midIndex = Math.ceil((end + start) / 2);
  const midNode = new Node(array[midIndex]);

  midNode.setLeft(minimal(array, start, midIndex - 1));
  midNode.setRight(minimal(array, midIndex + 1, end));

  return midNode;
};

const minimalTree = array => minimal(array, 0, array.length - 1)

printBinaryTree(minimalTree(array));
