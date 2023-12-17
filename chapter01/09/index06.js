// 배열 내장함수
// filter 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만듭니다.
const todos = [
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
];

// const tasksNotDone = todos.filter(todo => todo.done === false);
const tasksNotDone = todos.filter(todo => !todo.done);
console.log(tasksNotDone);
// [
//     {
//         id: 4,
//         text: '배열 내장 함수 배우기',
//         done: false
//     }
// ];
