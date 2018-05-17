const { SinglyLinkedList, printLinkedList, Node } = require('../common')

const sumList = (list1, list2) => {
	let p1 = list1.head, p2 = list2.head
	let base = 1, sum = 0
	while(p1 !== null || p2 !== null) {
		const value1 = p1 === null ? 0 : p1.value
		const value2 = p2 === null ? 0 : p2.value
		sum += (value1 + value2) * base
		
		base *= 10
		if (p1 !== null) p1 = p1.next
		if (p2 !== null) p2 = p2.next
	}
	return numToList(sum)
}

const sumListRec = (list1, list2, base) => {
	if (list1.head === null && list2.head === null) return 0
	if (list1.head ===  null) list1.head = new Node(0)
	if (list2.head ===  null) list2.head = new Node(0)
	
	const sum = (list1.head.value + list2.head.value) * base
	list1.head = list1.head.next
	list2.head = list2.head.next
	return sum + sumListRec(list1, list2, base * 10)
}

const sumList2 = (list1, list2) => {
	let length1 = 0, length2 = 0
	let p1 = list1.head, p2 = list2.head
	let sum = 0
	
	while(p1 !== null || p2 !== null) {
		if (p1 !== null) length1 ++
		if (p2 !== null) length2 ++
		p1 = p1.next
		p2 = p2.next
	}
	
	p1 = list1.head
	p2 = list2.head
	while (p1 !== null || p2 !== null) {
		if (p1 !== null) sum += p1.value * Math.pow(10, length1 - 1)
		if (p2 !== null) sum += p2.value * Math.pow(10, length2 - 1)
		length1 --
		length2 --
		p1 = p1.next
		p2 = p2.next
	}
	
	return numToList2(sum)
}

const sumList3 = (list1, list2) => {
	let p1 = list1.head, p2 = list2.head
	while (p1 !== null || p2 !== null) {
		if (p1 === null) {
			const temp = list1.head
			list1.head = new Node(0)
			list1.head.next = temp
			p2 = p2.next
		} else if (p2 === null) {
			const temp = list2.head
			list2.head = new Node(0)
			list2.head.next = temp
			p1 = p1.next
		} else {
			p1 = p1.next
			p2 = p2.next
		}
	}
	
	let sum = 0
	p1 = list1.head
	p2 = list2.head
	while (p1 !== null && p2 !== null) {
		sum = sum * 10 + p1.value + p2.value
		p1 = p1.next
		p2 = p2.next
	}
	
	return sum
}

const numToList = (value) => {
	const resultList = new SinglyLinkedList()
	let temp = value
	while(temp > 0) {
		resultList.add(temp % 10)
		temp = Math.floor(temp / 10)
	}
	return resultList
}

const numToList2 = (value) => {
	const resultList = new SinglyLinkedList()
	let temp = value
	const resultArray = new Array()
	while(temp > 0) {
		resultArray.push(temp % 10)
		temp = Math.floor(temp / 10)
	}
	
	for (let i = resultArray.length - 1; i >= 0; i--) {
		resultList.add(resultArray[i])
	}
	return resultList
}

const list1 = new SinglyLinkedList()
const list2 = new SinglyLinkedList()
list1.add(9).add(7).add(8).add(1)
list2.add(6).add(8).add(5)
printLinkedList(list1)
printLinkedList(list2)

//printLinkedList(numToList(sumListRec(list1, list2, 1)))
//printLinkedList(sumList2(list1, list2))
printLinkedList(numToList2(sumList3(list1, list2)))
