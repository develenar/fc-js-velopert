// 함수의 기본 파라미터
// 원의 넓이를 구하는 함수
// r 값을 넣어주지 않으면
function calculateCircleArea(r) {
    return Math.PI * r * r;
  }
  
  const area = calculateCircleArea();
  console.log(area); // NaN
