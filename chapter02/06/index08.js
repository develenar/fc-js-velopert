// 비구조화 할당 (구조분해) 문법
// 깊은 값 비구조화 할당
// 한번에 모두 추출하는 방법
const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};

const {
  state: {
    information: { name, languages }
  },
  value
} = deepObject;

const extracted = {
  name,
  languages,
  value
};

console.log(extracted);
