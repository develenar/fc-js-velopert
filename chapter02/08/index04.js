// 자바스크립트의 Scope 에 대한 이해
// Hoisting 이해하기
myFunction();

function myFunction() {
  console.log('hello world!');
}

myFunction();

// undefined
console.log(number);
var number = 2;

var number;
console.log(number);
number = 2;

// const 와 let 은 hoisting 이 발생하지 않고, 에러가 발생
function fn() {
  console.log(a);
  let a = 2;
}
fn();
