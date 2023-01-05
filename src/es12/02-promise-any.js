const promise1 = new Promise((resolve, reject) => reject('Rechazado'));
const promise2 = new Promise((resolve, reject) => resolve('Aprovado'));
const promise3 = new Promise((resolve, reject) => resolve('También aprovado'));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response))