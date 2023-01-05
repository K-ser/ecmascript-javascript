let hello = 'Hello';
let world = 'world';
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

//Template literal
let epicPhrase2 = `${hello} ${world}!`
console.log(epicPhrase2);

//Multi-line strings
let lorem = 'Esta es una frase normal \n' + 'esta es la continuación de la frase normal';

let lorem2 = `Esta es una frase multilinea
con template literals
`;
console.log(lorem);
console.log(lorem2);