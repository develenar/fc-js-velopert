// 조건문
// if 문
const a = 1;
if (a + 1 === 2) {
  console.log('a + 1 이 2 입니다.');
}

const b = 0;
if (b + 1 === 2) {
  console.log('b + 1 이 2 입니다.');
}

const c = 1;
if (true) {
  const c = 2;
  console.log('if문 안의 c 값은 ' + c);
}
console.log('if문 밖의 c 값은 ' + c);
