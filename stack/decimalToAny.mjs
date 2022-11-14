import { StackArray } from './stack-array.mjs';

const PARAM_MAP = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
/**
 * 10进制转任意2~36进制数
 */
function decimalToAny(decNumber, paramNum) {
  let decimalStr = '';
  // 相除的结果
  let res = Math.floor(decNumber / paramNum);
  // 余数
  let yu = decNumber % paramNum;

  const stack = new StackArray();
  stack.push(PARAM_MAP[yu]);

  while (res > 0) {
    yu = res % paramNum;
    res = Math.floor(res / paramNum);
    stack.push(PARAM_MAP[yu]);
  }

  console.log(stack);

  while (!stack.isEmpty()) {
    decimalStr += stack.pop();
  }

  return decimalStr;
}

console.log(`10对应的是16进制为：`, decimalToAny(10, 16));
console.log(`10对应的是8进制为：`, decimalToAny(10, 8));
console.log(`16对应的是8进制为：`, decimalToAny(16, 8));
console.log(`64对应的是8进制为：`, decimalToAny(64, 8));
console.log(`65对应的是8进制为：`, decimalToAny(65, 8));
