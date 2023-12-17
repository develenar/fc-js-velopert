// spread 와 rest
// rest
// 함수 파라미터에서의 rest
// function sum(a, b, c, d, e, f, g) {
//     let sum = 0;
//     if (a) sum += a;
//     if (b) sum += b;
//     if (c) sum += c;
//     if (d) sum += d;
//     if (e) sum += e;
//     if (f) sum += f;
//     if (g) sum += g;
//     return sum;
// }

function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);
