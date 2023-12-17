// Truthy and Falsy
// print 함수가 다음과 같이 파라미터가 비어진 채로 실행됐다고 가정
function print(person) {
  if (person === undefined) {
    return;
  }
  console.log(person.name);
}

const person = {
  name: 'John'
};

print();
