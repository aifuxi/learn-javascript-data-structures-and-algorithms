class Queue {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowest = 0;
  }

  // 向队列尾部添加一个（或多个）新的项
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // 移除队列的第一项（即排在队列最前面的项）并返回被移除的元素
  dequeue() {
    if (this.isEmpty()) {
      return;
    }

    const res = this.items[this.lowest];
    delete this.items[this.lowest];
    this.lowest++;

    return res;
  }

  /* 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做
  任何变动（不移除元素，只返回元素信息——与 Stack 类的 peek 方法非常类似）。该方
  法在其他语言中也可以叫作 front 方法 */
  peek() {
    return this.items[this.lowest];
  }

  // 如果队列中不包含任何元素，返回 true，否则返回 false
  isEmpty() {
    return this.size() === 0;
  }

  // 返回队列包含的元素个数，与数组的 length 属性类似
  size() {
    return this.count - this.lowest;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
}

const queue = new Queue();
console.log('queue.isEmpty():', queue.isEmpty());
queue.enqueue('Jack');
queue.enqueue('Tom');
queue.enqueue('Bob');
console.log('queue.isEmpty():', queue.isEmpty());
console.log('queue:', queue);
console.log('queue.size():', queue.size());
queue.dequeue();
console.log('queue:', queue);
console.log('queue.size():', queue.size());
console.log('queue.peek():', queue.peek());
