//Esta es una mejora al momento de devolver un objeto con una función, antes se asignaba el nombre de la propiedad y se decia que 
//su valor seria igual a lo que se recibia, ahora, si tiene el mismo nombre, podemos devolverlo sin asignación

//vieja manera
function newUser(name, age, country) {
  return {
    name: name,
    age: age,
    country: country,
    id: uId,
  };
}

//nueva manera
function newUser(name, age, country, uId) {
  return {
    name,
    age,
    country,
    //solo se asigna si es que el nombre recibido será distinto al devuelto
    id: uId
  };
}