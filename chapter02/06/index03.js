// 비구조화 할당 (구조분해) 문법
// 만약 b 값이 주어지지 않았다고 가정
const object = { a: 1 };

function print({ a, b }) {
  console.log(a);
  console.log(b);
}

print(object);
// 1
// undefined
