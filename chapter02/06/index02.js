// 비구조화 할당 (구조분해) 문법
// 함수의 파라미터에서도 비구조화 할당
const object = { a: 1, b: 2 };

function print({ a, b }) {
  console.log(a);
  console.log(b);
}

print(object);
