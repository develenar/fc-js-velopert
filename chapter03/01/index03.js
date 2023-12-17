// Promise
// Promise 를 만드는 함수를 작성
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

// increaseAndPrint(0).then((n) => {
//   console.log('result: ', n);
// })

// 만약 then 내부에 넣은 함수에서 또 Promise 를 리턴하게 된다면, 연달아서 사용 할 수 있습니다. 
// increaseAndPrint(0)
// .then(n => {
//     return increaseAndPrint(n);
// })
// .then(n => {
//     return increaseAndPrint(n);
// })
// .then(n => {
//     return increaseAndPrint(n);
// })
// .then(n => {
//     return increaseAndPrint(n);
// })
// .then(n => {
//     return increaseAndPrint(n);
// })
// .catch(e => {
//     console.error(e);
// });

increaseAndPrint(0)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch(e => {
    console.error(e);
});
