// 조건문 더 스마트하게 쓰기
// 특정 값이 여러 값중 하나인지 확인해야 할 때
// function isAnimal(text) {
//     return (
//       text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
//     );
// }

// includes 함수
// function isAnimal(name) {
//     const animals = ['고양이', '개', '거북이', '너구리'];
//     return animals.includes(name);
// }

// 화살표 함수
const isAnimal = name => ['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false
