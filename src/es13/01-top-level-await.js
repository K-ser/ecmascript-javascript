import { products } from "./products.js";

async function printProducts() {
  const print = await products;
  console.log(print);
} 

printProducts();
console.log('Hey!!');