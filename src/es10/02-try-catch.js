try {
  hello();
} catch (error) {
  console.log(error);
}

// con mensaje personalizado
try {
  anotherFN();
} catch {
  console.log('Esto es un error personalizado');
}