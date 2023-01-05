const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!!'), 1000)
      : reject(new Error('Error!'));
  });
}

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log('Hello');
}

console.log('before');
anotherFn();
console.log('after');