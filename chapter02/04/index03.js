// 함수의 기본 파라미터
// 원의 넓이를 구하는 함수
// function calculateCircleArea(r) {
//   const radius = r || 1;
//   return Math.PI * radius * radius;
// }

// function calculateCircleArea(r = 1) {
//   return Math.PI * r * r;
// }

const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea();
console.log(area); // 3.141592653589793
