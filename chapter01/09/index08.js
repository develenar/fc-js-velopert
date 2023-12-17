// 배열 내장함수
// slice 배열을 잘라낼 때 사용하는데, 중요한 점은 기존의 배열은 건들이지 않는 다
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지

console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 30, 40]
