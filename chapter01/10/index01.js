// 프로토타입과 클래스
// 객체 생성자
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function() {
      console.log(this.sound);
    };
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();
