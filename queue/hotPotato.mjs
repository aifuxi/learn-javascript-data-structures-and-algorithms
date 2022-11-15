import { Queue } from './Queue.mjs';

function hotPotato(elementsList, num) {
  const queue = new Queue();
  elementsList.forEach((v) => {
    queue.enqueue(v);
  });

  console.log('queue:', queue);

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    console.log(`${queue.dequeue()}被淘汰`);
  }

  console.log('queue:', queue);
  console.log(queue.peek());
}

hotPotato(['Jack', 'Tom', 'Bob', 'foo', 'bar'], 3);
