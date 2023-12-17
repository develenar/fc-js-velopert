// Truthy and Falsy
// Truthy 한 값과 Falsy 한 값은 if 문에서도 사용
const value = { a: 1 };

if (value) {
  console.log('value 가 Truthy 하네요.');
}

// 특정 값이 Truthy 한 값이라면 true, 그렇지 않다면 false 로 값을 표현
//const truthy = value ? true : false;
const truthy = !!value;
