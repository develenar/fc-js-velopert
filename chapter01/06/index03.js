// 객체
// Getter 함수와 Setter 함수
// Getter 함수
const number = {
    a: 1,
    b: 2,
    get sum() {
      console.log('sum 함수가 실행됩니다!');
      return this.a + this.b;
    }
};
  
console.log(number.sum);
number.b = 5;
console.log(number.sum);

// Setter 함수
const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
      console.log('calculate');
      this.sum = this._a + this._b;
    },
    get a() {
      return this._a;
    },
    get b() {
      return this._b;
    },
    set a(value) {
      console.log('a가 바뀝니다.');
      this._a = value;
      this.calculate();
    },
    set b(value) {
      console.log('b가 바뀝니다.');
      this._b = value;
      this.calculate();
    }
};
  
console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
