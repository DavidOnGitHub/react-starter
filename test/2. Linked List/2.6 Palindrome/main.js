const { SinglyLinkedList, printLinkedList, Node } = require('../common')

const palindrome = (list) => {
	let left = list.head
	const palindromeUntil = (right) => {
		if (right === null) {
			return {
				keepChecking: true,
				isPal: true
			}
		}
		
		const result = palindromeUntil(right.next)
		if (left === right || left === right.next) {
			return {
				keepChecking: false,
				isPal: result.isPal
			}
		}
		if (result.keepChecking) {
			console.log('checking ', left.value, right.value)
			if (left.value === right.value) {
				left = left.next
				return {
					keepChecking: true,
					isPal: true
				}
			}
			return {
				keepChecking: false,
				isPal: false
			}
		} else {
			return {
				keepChecking: false,
				isPal: result.isPal
			}
		}
	}
	
	return palindromeUntil(list.head.next).isPal
}

const list = new SinglyLinkedList()
list.add('a').add('b').add('c').add('b').add('b').add('a')

printLinkedList(list)
console.log(palindrome(list))
