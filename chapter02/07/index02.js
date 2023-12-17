// spread 와 rest
// rest
// 객체에서의 rest
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

// const { color, ...rest } = purpleCuteSlime;
const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color); // purple
console.log(rest); // Object {name: "슬라임", attrubute: "cute"}

// attribute 까지 없앤 새로운 객체
const { attribute, ...slime } = cuteSlime;
console.log(attribute); // cute
console.log(slime); // Object {name: "슬라임"}
