// 배열 내장함수
// reduce
// 주어진 배열에 대하여 총합을 구해야 하는 상황이 왔다고 가정해봅시다.
const numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// numbers.forEach(n => {
//   sum += n;
// });

let sum = array.reduce((accumulator, current) => accumulator + current, 0); // ( accumulator 와 current 를 파라미터로 가져와서 결과를 반환하는 콜백함수,  reduce 함수에서 사용 할 초깃값)

// let sum = numbers.reduce((accumulator, current) => {
//     console.log({ accumulator, current });
//     return accumulator + current;
// }, 0);

console.log(sum);


// reduce 를 사용해서 평균 계산
const numbers2 = [1, 2, 3, 4, 5];
let sum2 = numbers2.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);

console.log(sum2);
