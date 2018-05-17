const { SinglyLinkedList, printLinkedList } = require('../common')

const list = new SinglyLinkedList(12)
list.add(8).add(9).add(10).add(12).add(16)

const removeDups = (list) => {
	let p1 = list.head
	
	while (p1 !== null) {
		let p2 = p1
		while (p2 !== null && p2.next !== null) {
			if (p1.value === p2.next.value) {
				p2.next = p2.next.next
			}
			p2 = p2.next
		}
		p1 = p1.next
	}
	return list
}
printLinkedList(list)
printLinkedList(removeDups(list))