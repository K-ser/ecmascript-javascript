const anotherFn = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('HEy!!');
    } else {
      reject('Upss!!');
    }
  });
}

anotherFn()
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(() => console.log('Finally!!'))