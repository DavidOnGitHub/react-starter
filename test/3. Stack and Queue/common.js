class StackNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error('popping an empty stack')
    }
    const top = this.top
    this.top = this.top.next
    return top.value
  }
  push(value) {
    if (this.isEmpty()) {
      this.top = new StackNode(value)
    } else {
      const top = this.top
      this.top = new StackNode(value)
      this.top.next = top
    }
    return this
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error('peeking an empty stack')
    }
    return this.top.value
  }
  isEmpty() {
    return this.top === null
  }
}

module.exports = { Stack }
