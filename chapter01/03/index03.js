// 연산자
// 논리 연산자
// NOT
const a = !true;
console.log(a);

const b = !false;
console.log(b);


// AND
const c = true && true;
console.log(c);

// 모두 false
let d = false && false;
d = false && true;
d = true && false;


//OR
// 모두 true
let e = true || false;
e = false || true;
e = true || true;

let f = false || false;


// 연산 순서 NOT -> AND -> OR
const g = !((true && false) || (true && false) || !false);
