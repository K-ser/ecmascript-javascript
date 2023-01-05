function newUser (name, age, country) {
  var name = name || 'Kevin';
  var age = age || 25;
  var country = country || 'MX';
  console.log(name, age, country);
}

newUser();
newUser('Ivan', 30, 'JPN');

//es6
function newAdmin(name = 'Kevin', age = 25, country = 'MX') {
  console.log(name, age, country);
}

newAdmin();
newAdmin('Ivan', 30, 'JPN');