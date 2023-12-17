// 배열 내장함수
// findIndex 배열 안에 있는 찾고자하는 항목이 몇번째 원소인지 알아내려면
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

const index = todos.findIndex(todo => todo.id === 3);
console.log(index);
// 2
