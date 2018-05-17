const { SinglyLinkedList, printLinkedList } = require('../common')

const deleteNode = (node) => {
	if (node.next === null) return
	node.value = node.next.value
	node.next = node.next.next
}

const list = new SinglyLinkedList(1)
list.add(2).add(3).add(4).add(5)
printLinkedList(list)

deleteNode(list.head.next.next.next)

printLinkedList(list)
