// Arrays destructuring

let fruits = ['banana', 'apple'];
let [a, b] = fruits;
console.log(a, b);

// Object destructuring

let user = {username: 'Kevin', age: 26};
let { username, age } = user;
console.log(username, age);

// Spread operator

let person = { name: 'Kev', age: 26};
let country = 'MX';
let obj = {id: 1, ...person, country};
console.log(obj);

// Rest
// esta es una manera de utilizar el spread operator como parametro de una función, de esta manera podemos empaquetar o juntar 
// argumentos enviados para que queden como un objeto o un array

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

//los valores que se agrupan en el values de arriba son a partir del segundo 1
sum(1, 1, 2, 3);