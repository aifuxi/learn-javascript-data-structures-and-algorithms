// 双端队列，既可以在开头也可以在结尾添加和删除元素
export class Deque {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowest = 0;
  }
  // 该方法在双端队列前端添加新的元素
  addFront(element) {
    // 这里分3中情况
    // 1. 队列为空
    if (this.isEmpty()) {
      this.items[this.count] = element;
      this.count++;
      return;
    }

    // 2. 在插入之前，已经有元素被删除了
    if (this.lowest > 0) {
      this.lowest--;
      this.items[this.lowest] = element;
      this.count++;
      return;
    }

    // 3. 在插入之前，没有元素被删除过，lowest === 0
    if (this.lowest === 0) {
      // 把所有元素往后移一位
      for (let i = this.count - 1; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      // 最新的元素放在0位置
      this.items[0] = element;
      this.count++;
      return;
    }
  }

  /* 该方法在双端队列后端添加新的元素（实现方法和 Queue 类中的enqueue 方法相同） */
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  /* 该方法会从双端队列前端移除第一个元素（实现方法和 Queue 类中的dequeue 方法相同）。 */
  removeFront() {
    if (this.isEmpty()) {
      return;
    }

    const res = this.items[this.lowest];
    delete this.items[this.lowest];
    this.lowest++;

    return res;
  }

  /* 该方法会从双端队列后端移除第一个元素（实现方法和 Stack 类中的pop 方法一样）。 */
  removeBack() {
    if (this.isEmpty()) {
      return;
    }

    const res = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return res;
  }

  /* 该方法返回双端队列前端的第一个元素（实现方法和 Queue 类中的 peek方法一样）。 */
  peekFront() {
    return this.items[this.lowest];
  }

  /* 该方法返回双端队列后端的第一个元素（实现方法和 Stack 类中的 peek方法一样）。 */
  peekBack() {
    return this.items[this.count];
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

/* const deque = new Deque();
console.log('deque.isEmpty():', deque.isEmpty());
deque.addFront('f1');
console.log('deque:', deque);
console.log('deque.isEmpty():', deque.isEmpty());
deque.addBack('b1');
deque.addBack('b2');
console.log('deque:', deque);
console.log('deque.isEmpty():', deque.isEmpty());
console.log('deque.removeBack():', deque.removeBack());
console.log('deque:', deque);
console.log('deque.size():', deque.size());
console.log('deque.removeFront():', deque.removeFront());
console.log('deque:', deque);
console.log('deque.size():', deque.size());
deque.addFront('a1');
deque.addFront('a2');
deque.addFront('a3');
console.log('deque:', deque);
console.log('deque.size():', deque.size()); */
