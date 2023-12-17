// spread 와 rest
// rest
// 함수 인자와 spread
function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];

// const result = sum(
//     numbers[0],
//     numbers[1],
//     numbers[2],
//     numbers[3],
//     numbers[4],
//     numbers[5]
// );

const result = sum(...numbers);
