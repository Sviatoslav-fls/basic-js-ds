const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
module.exports = class Stack {

  constructor() {

    this.items = []; // Array is used to implement stack
  }

  push(element) {
    this.items.push(element); // push element into the items
  }

  pop() {

    if (this.items.length == 0) return 'The stack is empty';
    // return top most element in the stack and removes it from the stack
    return this.items.pop();
  }

  peek() {
    //return the top most elements in the stack, but doesn’t delete it.
    return this.items[this.items.length - 1];
  }
}
