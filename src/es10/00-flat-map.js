const array = [1, 2, 3, [4], 5, [6, 7], [8], 9];
const newArray = array.flat()
console.log(newArray);

//flat-map
const flatMap = array.flatMap(item => {
  console.log(item)
  return item * 2;
})
console.log(flatMap);