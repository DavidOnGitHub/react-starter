const { Stack } = require('../common')

const stack = new Stack()

stack.push(3).push(40).push(25).push(2).push(10)

const sort = stack => {
  const stack2 = new Stack()
  while(!stack.isEmpty()) {
    const top = stack.pop()
    while(!stack2.isEmpty() && stack2.peek() > top) {
      stack.push(stack2.pop())
    }
    stack2.push(top)
  }

  while(!stack2.isEmpty()) {
    stack.push(stack2.pop())
  }
  return stack
}

const sorted = sort(stack)
while (!sorted.isEmpty()) {
  console.log(sorted.pop());
}
