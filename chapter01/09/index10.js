// 배열 내장함수
// shift 첫번째 원소를 배열에서 추출 (추출하는 과정에서 배열에서 해당 원소는 사라집니다.)
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log(value); // 10
console.log(numbers); // [20, 30, 40]
