const array = [23, 85, 64, 31, , , ,];

console.log(array);
console.log(array.length);
console.log(array[5]);

array.splice(5, 1, 25);

console.log(array);
console.log(array.length);
console.log(array[5]);