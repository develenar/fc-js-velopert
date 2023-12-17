// Promise
// 1초뒤에 실패되게끔
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error()); // 실패하는 상황에서는 reject 
  }, 1000);
});

myPromise
.then(n => {
    console.log(n);
})
.catch(error => { // .catch 를 통하여 실패했을시 수행 할 작업을 설정
    console.log(error);
});
