// 비구조화 할당 (구조분해) 문법
// 비구조화 할당시 이름 바꾸기
const animal = {
  name: '멍멍이',
  type: '개'
};

// const nickname = animal.name;
// 문자를 사용해서 이름을 바꿔줄 수 있습니다.
const { name: nickname } = animal

console.log(nickname); // 멍멍이
