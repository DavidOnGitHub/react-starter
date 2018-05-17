class Node {
	constructor(value) {
		this.value = value
		this._next = null
	}
	get next() {
		return this._next
	}

	set next(node) {
		this._next = node
	}
}

class SinglyLinkedList {
	constructor(value) {
		if (value) {
			this.head = new Node(value)
		} else {
			this.head = null
		}
		this.tail = this.head
		this.add = this.add.bind(this)
		this.remove = this.remove.bind(this)
		this.isEmpty = this.isEmpty.bind(this)
	}
	add(value) {
		if (this.head === null) {
			this.head = new Node(value)
			this.tail = this.head
		} else {
			this.tail.next = new Node(value)
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
	while (pointer !== null) {
		result.push(pointer.value)
		pointer = pointer.next
	}
	console.log(result.join('->'))
}

module.exports = { SinglyLinkedList, printLinkedList, Node }
