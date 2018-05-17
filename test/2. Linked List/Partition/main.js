const { SinglyLinkedList, printLinkedList } = require('../common')

const partition = (list, value) => {
	let p = list.head
	while(p.next !== null) {
		if (p.next.value < value) {
			const node = p.next
			p.next = p.next.next
			node.next = list.head
			list.head = node
		} else {
			p = p.next
		}
		
	}
}

const list = new SinglyLinkedList(1)
list.add(8).add(2).add(3).add(4).add(5).add(2).add(3)
printLinkedList(list)

partition(list, 2)

printLinkedList(list)
