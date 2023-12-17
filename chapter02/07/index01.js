// spread 와 rest
// spread
const slime = {
    name: '슬라임'
};

const cuteSlime = {
    // name: '슬라임',
    ...slime,
    attribute: 'cute'
};

const purpleCuteSlime = {
    ...cuteSlime,
    // name: '슬라임',
    // attribute: 'cute',
    color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

// spread 연산자는 배열에서도 사용 할 수 있습니다.
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
console.log(animals);
console.log(anotherAnimals);

// 배열에서 spread 연산자를 여러번 사용 할 수도 있습니다.
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]
