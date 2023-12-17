// 단축 평가 (short-circuit evaluation) 논리 계산법
// getName 의 파라미터에 제대로된 객체가 주어지지 않으면
const dog = {
    name: '멍멍이'
};
  
function getName(animal) {
    if (animal) {
      return animal.name;
    }
    return undefined;
}

// const name = getName(dog);
const name = getName();
console.log(name);
