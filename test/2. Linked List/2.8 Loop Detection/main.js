const { SinglyLinkedList, printLinkedList, Node } = require('../common')

const loopStart = (list) => {
	let p1 = list.head, p2
	if (list.head.next === null) return false
	p2 = list.head.next.next

	while (p1 !== p2 && p2.next !== null) {
		p1 = p1.next
		p2 = p2.next
		if (p2.next === null) return false
		p2 = p2.next
	}

	if (p2.next === null) return false
	if (p1 !== p2) return false
	p1 = list.head
	while (p1 !== p2) {
		p1 = p1.next
		p2 = p2.next
	}
	return p1
}

const list = new SinglyLinkedList()
list.add('a').add('b').add('e').add('n').add('p').add('q').add('l').add('n')
const startOfLoop = new Node('f')
startOfLoop.next = new Node('g')
startOfLoop.next.next = startOfLoop
list.tail.next = startOfLoop

const start = loopStart(list)

console.log(start)

