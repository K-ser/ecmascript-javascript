//declarando
class User {};
//instancia de una clase
// const kev = new User();

class user {
  //metodos
  gretting() {
    return 'Hello';
  }
};
const kev = new user();
console.log(kev.gretting());

//constructor
class user {
  constructor() {
    console.log('Nuevo Usuario');
  }
  gretting() {
    return 'Hello';
  }
}
const kev1 = new user();

//this
class user {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return 'Hello';
  }
  gretting() {
    return `${this.speak()} ${this.name}`;
  }
}
const kev2 = new user('Kevin');
console.log(kev2.gretting());

//setters getters
class user {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //metodos
  speak() {
    return 'Hello';
  }
  gretting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age
  }
  set uAge(n) {
    this.age = n;
  }
}
const kevin = new user('Kevin', 25);
console.log(kevin.uAge);
console.log(kevin.uAge = 30);
