import { Node } from '../models/Node.mjs';
import { defaultEqualsFn } from '../utils/equalsFn.mjs';

class LinkedList {
  constructor(equalsFn = defaultEqualsFn) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  // push(element)：向链表尾部添加一个新元素。
  push(element) {
    const node = new Node(element);

    // 如果是空的链表
    if (this.head == null) {
      this.head = node;
    } else {
      // 不是空链表，需要找到最后的元素 xxx.next == null
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }

    this.count++;
  }

  // insert(element, position)：向链表的特定位置插入一个新元素
  insert(element, position) {
    const node = new Node(element);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
      this.count++;
    } else if (position > 0 && position < this.count) {
      let current = this.getElementAt(position);
      let prev = this.getElementAt(position - 1);

      // pre [node] current
      prev.next = node;
      node.next = current;

      this.count++;
    } else if (position === this.count) {
      let current = this.getElementAt(position - 1);
      current.next = node;
      this.count++;
    } else {
      console.log('索引越界');
    }
  }

  // getElementAt(index)：返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined。
  getElementAt(index) {
    // 判断索引是否越界
    if (index > this.count) {
      return undefined;
    } else if (index === 0) {
      return this.head;
    } else {
      let res = this.head;
      let currentCount = 0;
      while (currentCount < index) {
        res = res.next;
        currentCount++;
      }

      return res;
    }
  }

  // remove(element)：从链表中移除一个元素。
  remove(element) {
    if (this.head == null) {
      return undefined;
    } else {
      let current = this.getElementAt(this.indexOf(element));
      let prev = this.getElementAt(this.indexOf(element) - 1);

      prev.next = current.next;
      current.next = null;

      this.count--;
      return current;
    }
  }

  // indexOf(element)：返回元素在链表中的索引。如果链表中没有该元素则返回-1。
  indexOf(element) {
    let index = 0;
    if (this.head == null) {
      return -1;
    } else {
      let current = this.head;
      while (current.element != element) {
        current = current.next;
        index++;
      }
      return index;
    }
  }

  // removeAt(position)：从链表的特定位置移除一个元素。
  removeAt(position) {
    if (position === 0) {
      this.head = this.head.next;
      this.count--;
    } else if (position > 0 && position < this.count) {
      let current = this.getElementAt(position);
      let prev = this.getElementAt(position - 1);
      prev.next = current.next;
      this.count--;
    } else if (position === this.count) {
      let current = this.getElementAt(position - 1);
      current.next = node;
      this.count--;
    } else {
      console.log('索引越界');
    }
  }

  // isEmpty()：如果链表中不包含任何元素，返回 true，如果链表长度大于 0则返回 false。
  isEmpty() {
    return this.count === 0;
  }

  // size()：返回链表包含的元素个数，与数组的 length 属性类似。
  size() {
    return this.count;
  }

  // toString()：返回表示整个链表的字符串。由于列表项使用了 Node 类，就需要重写继
  // 承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
  toString() {
    let current = this.head;
    let str = '';
    while (current.next != null) {
      str += current.element + ', ';
      current = current.next;
    }

    return str + current.element;
  }
}

const list = new LinkedList();
list.push(15);
list.push(10);
list.push(8);
list.push(996);
list.push(996233);
console.log('list:', list.toString());
console.log('list.indexOf(10):', list.indexOf(10));
console.log('list.indexOf(996):', list.indexOf(996));
console.log('list.size():', list.size());
console.log('list.getElementAt(0):', list.getElementAt(0));
console.log('list.remove(8):', list.remove(8));
console.log('list:', list.toString());
list.insert(123, 0);
console.log('list:', list.toString());
console.log('list.size():', list.size());
list.insert(788899, 4);
console.log('list:', list.toString());
list.removeAt(1);
console.log('list:', list.toString());
console.log('list.size():', list.size());
