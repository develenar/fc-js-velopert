// 연산자
// 비교 연산자
const a = 1;
const b = 1;
const equal = a === b;
console.log(equal);
const equals = a == b; // 타입 검사를 하지 않습니다.
console.log(equals);

const value = 'a' !== 'b';

console.log(1 != '1'); // 타입 검사를 하지 않습니다.
console.log(1 !== '1');

const c = 10;
const d = 15;
const e = 15;

console.log(c < d); // true
console.log(d > c); // true
console.log(d >= e); // true
console.log(c <= e); // true
console.log(d < e); // false;

