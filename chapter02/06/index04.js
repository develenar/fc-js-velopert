// 비구조화 할당 (구조분해) 문법
// 비구조화 할당시 기본값 설정
const object = { a: 1 };

function print({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}

print(object);
// 1
// 2

// 함수의 파라미터에서만 할 수 있는 것은 아닙니다.
const { a, b = 2 } = object;

console.log(a); // 1
console.log(b); // 2
