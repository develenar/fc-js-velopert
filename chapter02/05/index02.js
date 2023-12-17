// 조건문 더 스마트하게 쓰기
// 값에 따라 다른 결과물을 반환 해야 할 때
// function getSound(animal) {
//     if (animal === '개') return '멍멍!';
//     if (animal === '고양이') return '야옹~';
//     if (animal === '참새') return '짹짹';
//     if (animal === '비둘기') return '구구 구 구';
//     return '...?';
// }

// switch case
// function getSound(animal) {
//     switch (animal) {
//       case '개':
//         return '멍멍!';
//       case '고양이':
//         return '야옹~';
//       case '참새':
//         return '짹짹';
//       case '비둘기':
//         return '구구 구 구';
//       default:
//         return '...?';
//     }
// }

function getSound(animal) {
    const sounds = {
      개: '멍멍!',
      고양이: '야옹~',
      참새: '짹짹',
      비둘기: '구구 구 구'
    };
    return sounds[animal] || '...?';
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구
