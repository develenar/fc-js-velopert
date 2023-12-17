// 함수
// const a = 1;
// const b = 2;
// const sum = a + b;

function add(a, b) {
    return a + b;
    // return 아래의 코드는 호출이 안됩니다.
    console.log('호출이 되지 않는 코드!');
}
  
const sum = add(1, 2);
console.log(sum);
