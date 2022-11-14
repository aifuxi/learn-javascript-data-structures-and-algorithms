import { StackArray } from './stack-array.mjs';

/**
 * 10 / 2 = 5 -> 0
 * 5 / 2 = 2 -> 1
 * 2 / 2 = 1 -> 0
 * 1 / 2 = 0 -> 1
 * [0, 1, 0, 1] -> 出栈 1010
 */
function decimalToBinary(decNumber) {
  let decimalStr = '';
  // 相除的结果
  let res = Math.floor(decNumber / 2);
  // 余数
  let yu = decNumber % 2;

  const stack = new StackArray();
  stack.push(yu);

  while (res > 0) {
    yu = res % 2;
    res = Math.floor(res / 2);
    stack.push(yu);
  }

  console.log(stack);

  while (!stack.isEmpty()) {
    decimalStr += stack.pop();
  }

  return decimalStr;
}

console.log(`10对应的二进制为：`, decimalToBinary(10));
