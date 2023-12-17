// 배열 내장함수
// map 배열 안의 각 원소를 변환 할 때 사용 되며, 이 과정에서 새로운 배열이 만들어집니다.
const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const squared = [];
// for (let i = 0; i < array.length; i++) {
//   squared.push(array[i] * array[i]);
// }

// forEach
// const squared = [];
// array.forEach(n => {
//     squared.push(n * n);
// });

// map
const square = n => n * n;
const squared = array.map(square);
  
console.log(squared);
// [1, 4, 9, 16, 25, 36, 49, 64];
