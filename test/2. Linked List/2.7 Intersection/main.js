const { SinglyLinkedList, printLinkedList, Node } = require('../common')

const intersection = (list1, list2) => {
	let p1 = list1.head, p2 = list2.head
	let offset = 0
	while (p1.next !== null || p2.next !== null) {
		if (p1.next === null) {
			offset --
		} else {
			p1 = p1.next
		}

		if (p2.next === null) {
			offset ++
		} else {
			p2 = p2.next
		}
	}

	if (p2 !== p1) return false

	p1 = list1.head
	p2 = list2.head

	if (offset > 0) {
		while (offset > 0) {
			p1 = p1.next
			offset --
		}
	} else if (offset < 0) {
		while (offset < 0) {
			p2 = p2.next
			offset ++
		}
	}

	while(p1.next !== null) {
		if (p1 === p2) return p1
		p1 = p1.next
		p2 = p2.next
	}
	return p1
}

const list1 = new SinglyLinkedList()
const list2 = new SinglyLinkedList()
list1.add('a').add('b').add('e').add('n')
list2.add('b').add('b')
const startOfIntersection = new Node('f')
startOfIntersection.next = new Node('g')
startOfIntersection.next.next = new Node('h')
list1.tail.next = startOfIntersection
list2.tail.next = startOfIntersection

const inter = intersection(list1, list2)

printLinkedList(list1)
printLinkedList(list2)
console.log(inter)

