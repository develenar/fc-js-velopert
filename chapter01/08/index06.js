// 반복문
// 연습
// numbers 라는 배열을 파라미터로 받아서 총합을 구하는 함수를 만들어봅시다.
function sumOf(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);
