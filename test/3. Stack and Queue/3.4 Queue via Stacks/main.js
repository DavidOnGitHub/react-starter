const { Stack } = require('../common')

class QueueViaStacks {
  constructor() {
    this.pushStack = new Stack()
    this.popStack = new Stack()
  }

  moveValuesFromTo(fromStack, toStack) {
    while(!fromStack.isEmpty()) {
      toStack.push(fromStack.pop())
    }
  }

  push(value) {
    if (this.pushStack.isEmpty()) {
      this.moveValuesFromTo(this.popStack, this.pushStack)
    }
    this.pushStack.push(value)
    return this
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('popping an empty queue')
    } else if (this.popStack.isEmpty()) {
      this.moveValuesFromTo(this.pushStack, this.popStack)
    }
    return this.popStack.pop()
  }

  isEmpty() {
    return this.pushStack.isEmpty() && this.popStack.isEmpty()
  }
}

const queue = new QueueViaStacks()

queue.push(1).push(2).push(3)

console.log(queue.pop(), queue.pop(), queue.pop());
