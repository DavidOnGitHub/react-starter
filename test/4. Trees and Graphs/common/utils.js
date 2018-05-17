const printBinaryTree = (root) => {
  print(root, 0)
}

const print = (node, level) => {
  if (!node) {
    console.log(new Array(level * 4).fill(' ').join(''), 'null');
    return
  }
  if (!node.left && !node.right) {
    console.log(new Array(level * 4).fill(' ').join(''), node.value);
    return
  }
  print(node.right, level + 1);
  console.log(new Array(level * 4).fill(' ').join(''), node.value);
  print(node.left, level + 1);
}

class Node {
  constructor(value) {
		this.value = value;
		this.parent = null;
    this.setLeft = this.setLeft.bind(this);
  }
  setLeft(node) {
		this.left = node;
		node.parent = this;
  }
  setRight(node) {
		this.right = node;
		node.parent = this;
  }
}

class LinkedListNode {
	constructor(value) {
		this.value = value;
		this.parent = null;
		this.next = null;
		this.setNext = this.setNext.bind(this)
  }
  setNext(node) {
		this.next = node;
		node.parent = this;
	}
}

class TreeNode {
	constructor(value) {
		this.value = value || null;
		this.children = [];
		this.parents = [];
		this.add = this.add.bind(this);
	}
	add(node) {
		this.children.push(node)
		node.parents.push(this)
	}
	removeOutgoingEdges() {
		this.children.forEach(child => {
			child.parents.splice(child.parents.indexOf(this), 1)
		})
	}
}

class SinglyLinkedList {
	constructor(node) {
		if (node) {
			this.head = node
		} else {
			this.head = null
		}
		this.tail = this.head
    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
		this.isEmpty = this.isEmpty.bind(this)
	}
	add(node) {
		if (!this.head) {
			this.head = node
			this.tail = this.head
		} else {
			this.tail.setNext(node)
			this.tail = this.tail.next
    }
		return this
  }
  remove() {
		const head = this.head
		this.head = this.head.next
		return head
	}
	isEmpty() {
		return !this.head
	}
}

const printLinkedList = (list) => {
	let pointer = list.head
	const result = []
	while (pointer) {
		result.push(pointer.value)
		pointer = pointer.next
	}
	console.log(result.join('->'))
}

module.exports = { printBinaryTree, Node, SinglyLinkedList, printLinkedList, TreeNode, LinkedListNode };
