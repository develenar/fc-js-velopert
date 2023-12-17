// Promise
// 1초 뒤에 성공시키는 상황에 대해서만 구현
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
});

myPromise.then(n => {
    console.log(n);
});
