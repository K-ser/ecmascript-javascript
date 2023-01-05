class user {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //metodos
  #speak() {
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
