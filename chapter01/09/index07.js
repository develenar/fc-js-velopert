// 배열 내장함수
// splice 배열에서 특정 항목을 제거할 때 사용
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
numbers.splice(index, 1); // (어떤 인덱스부터, 몇개를 지울지)
console.log(numbers);
// [10, 20, 40]
