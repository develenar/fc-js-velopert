// 배열 내장함수
// 퀴즈
// 숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요
function countBiggerThanTen(numbers) {
    /* 구현해보세요 */
    // 정답1
    // let count = 0;
    // numbers.forEach(n => {
    //   if (n > 10) {
    //     count++;
    //   }
    // });
    // return count;

    // 정답2
    // return numbers.filter(n => n > 10).length;

    // 정답3
    return numbers.reduce((acc, current) => {
        if (current > 10) {
          return acc + 1;
        } else {
          return acc;
        }
    }, 0);
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

