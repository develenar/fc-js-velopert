// spread 와 rest
// rest
// 배열에서의 rest
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;
//const [..rest, last] = numbers; // Error

console.log(one);
console.log(rest);
