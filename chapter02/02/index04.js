// Truthy and Falsy
// Falsy 한 값
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);

// Not A Number
const num = parseInt('15', 10); // 10진수 15를 숫자로 변환하겠다는 의미
console.log(num); // 10
const notnum = parseInt('야호~', 10);
console.log(notnum); // NaN

// Truthy 한 값
console.log(!3);
console.log(!'hello');
console.log(!['array?']);
console.log(![]);
console.log(!{ value: 1 });
