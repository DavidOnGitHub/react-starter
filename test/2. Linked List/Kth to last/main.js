const { SinglyLinkedList } = require('../common')
const list = new SinglyLinkedList(0)
list.add(1).add(2).add(3).add(4).add(5)

const kthToLast = (list, k) => {
	let p1 = list.head, p2 = list.head
	for (let i = 0; i < k; i++) {
		p2 = p2.next
		if (p2 === null) return false
	}
	
	while(p2.next !== null) {
		p1 = p1.next
		p2 = p2.next
	}
	
	return p1.value
}

console.log(kthToLast(list, 3))