// async/await
// 비동기 함수
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이';
};

const getRabbit = async () => {
  await sleep(500);
  return '토끼';
};
const getTurtle = async () => {
  await sleep(3000);
  return '거북이';
};

// async function process() {
//   const dog = await getDog();
//   console.log(dog);
//   const rabbit = await getRabbit();
//   console.log(rabbit);
//   const turtle = await getTurtle();
//   console.log(turtle);
// }

// Promise.all
// async function process() {
//   const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
//   console.log(results);
// }

// 비구조화 할당 문법
// async function process() {
//   const [dog, rabbit, turtle] = await Promise.all([
//     getDog(),
//     getRabbit(),
//     getTurtle()
//   ]);
//   console.log(dog);
//   console.log(rabbit);
//   console.log(turtle);
// }

// Promise.race
async function process() {
  const first = await Promise.race([
    getDog(),
    getRabbit(),
    getTurtle()
  ]);
  console.log(first);
}

process();
