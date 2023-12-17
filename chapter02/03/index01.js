// 단축 평가 (short-circuit evaluation) 논리 계산법
const dog = {
    name: '멍멍이'
};

function getName(animal) {
    return animal.name;
}

const name = getName(dog);
console.log(name); // 멍멍이
