// 반복문
// for...in 객체를 위한 반복문
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

console.log(Object.entries(doggy)); // Object.entries: [[키, 값], [키, 값]] 형태의 배열로 변환
console.log(Object.keys(doggy)); // Object.keys: [키, 키, 키] 형태의 배열로 변환
console.log(Object.values(doggy)); // Object.values: [값, 값, 값] 형태의 배열로 변환

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}
