import { Deque } from './Deque.mjs';

// 判断是否为回文字符串
function palindromeChecker(str) {
  const strArr = str.split('');

  const deque = new Deque();
  strArr.forEach((v) => {
    deque.addBack(v);
  });

  let isEqual = true;
  let first = '';
  let last = '';

  while (deque.size() > 1 && isEqual) {
    first = deque.removeFront();
    last = deque.removeBack();

    if (first !== last) {
      isEqual = false;
    }
  }

  return isEqual;
}

console.log("palindromeChecker('abcdedcba'):", palindromeChecker('abcdedcba'));
console.log("palindromeChecker('abcdeedva'):", palindromeChecker('abcdeedva'));
console.log("palindromeChecker('123321'):", palindromeChecker('123321'));
