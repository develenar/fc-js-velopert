// 단축 평가 (short-circuit evaluation) 논리 계산법
// && 연산자로 코드 단축시키기
const dog = {
    name: '멍멍이'
};
  
function getName(animal) {
    return animal && animal.name;
}

// const name = getName();
// console.log(name); // undefined

const name = getName(dog);
console.log(name); // 멍멍이
