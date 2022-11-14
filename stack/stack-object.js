class StackObject {
  constructor() {
    this.count = 0;
    this.item = {};
  }

  // 添加一个（或几个）新元素到栈顶。
  push(element) {
    this.item[this.count] = element;
    this.count++;
  }

  // 移除栈顶的元素，同时返回被移除的元素。
  pop() {
    if (this.isEmpty()) {
      return;
    }

    this.count--;
    const res = this.item[this.count];
    delete this.item[this.count];
    return res;
  }

  // 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
  peek() {
    if (this.isEmpty()) {
      return;
    }

    return this.item[this.count - 1];
  }

  // 如果栈里没有任何元素就返回 true，否则返回 false。
  isEmpty() {
    return this.count === 0;
  }

  // 移除栈里的所有元素。
  clear() {
    this.count = 0;
    this.item = {};
  }

  // 返回栈里的元素个数。该方法和数组的 length 属性很类似。
  size() {
    return this.count;
  }
}

const stack1 = new StackObject();
console.log(stack1.isEmpty());
stack1.push(199);
stack1.push(20);
console.log(stack1);
console.log(stack1.isEmpty());
console.log(stack1.size());
console.log(stack1.pop());
