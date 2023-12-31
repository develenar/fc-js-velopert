// 조건문 더 스마트하게 쓰기
// 값에 따라 실행해야 하는 코드 구문이 다를 때
// 객체에 함수를 넣으면 됩니다.
function makeSound(animal) {
  const tasks = {
    개() {
      console.log('멍멍');
    },
    고양이() {
      console.log('고양이');
    },
    비둘기() {
      console.log('구구 구 구');
    }
  };
  if (!tasks[animal]) {
    console.log('...?');
    return;
  }
  tasks[animal]();
}

getSound('개');
getSound('비둘기');
