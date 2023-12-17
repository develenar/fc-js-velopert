// 비구조화 할당 (구조분해) 문법
// 배열 비구조화 할당
// const array = [1, 2];
// const [one, two] = array;

const array = [1];
const [one, two = 2] = array;

console.log(one);
console.log(two);
