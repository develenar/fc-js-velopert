// 비구조화 할당 (구조분해) 문법
// 깊은 값 비구조화 할당
// 비구조화 할당 문법을 두번 사용
const deepObject = {
    state: {
      information: {
        name: 'velopert',
        languages: ['korean', 'english', 'chinese']
      }
    },
    value: 5
};

const { name, languages } = deepObject.state.information;
const { value } = deepObject;

// const extracted = {
//     name: name,
//     languages: languages,
//     value: value
// }

const extracted = {
    name,
    languages,
    value
};

console.log(extracted); // {name: "velopert", languages: Array[3], value: 5}
