// 단축 평가 (short-circuit evaluation) 논리 계산법
// || 연산자로 코드 단축시키기
const namelessDog = {
    name: ''
};

function getName(animal) {
    const name = animal && animal.name;
    // if (!name) {
    //   return '이름이 없는 동물입니다';
    // }
    // return name;
    return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.
