// Truthy and Falsy
// 만약에 다음과 같이 print 에 null 값이 파라미터로 전달되면
function print(person) {
  // print 함수에 조건을 추가
  // if (person === undefined || person === null) { 
  if (!person) {
    console.log('person이 없네요');
    return;
  }
  console.log(person.name);
}

const person = null;
print(person);
// person 이 undefined 이거나, null 인 상황을 대비하려면 위와 같이 코드를 작성
