function* iterate(array) {
  for(let value of array) {
    yield value;
  };
}

//se crea una instancia de la función para pasarle los parametros
const it = iterate(['Kevin', 'Paulina', 'Marisol', 'Carlos', 'Karla']);
//con el metodo next y la propiedad value se accede con el ciclo for de la funcion a cada
//elemto del objeto iterable que se haya pasado como parametro
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

function* getId() {
  let id = 1;
  while(true) {
    yield id++;
  }
}

const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);