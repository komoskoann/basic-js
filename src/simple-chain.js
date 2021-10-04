import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  stack: [],
  getLength() {
    return this.stack.length;
  },
  addLink(value) {
    this.stack.push(value)
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || !this.stack[position - 1]) {
      this.stack.length = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.stack.splice(position - 1, 1)
    return this;
  },
  reverseChain() {
    this.stack.reverse();
    return this
  },
  finishChain() {
    return this.stack.map(a => `( ${a} )`).join('~~')
  }
};
