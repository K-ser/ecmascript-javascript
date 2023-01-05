const user = {username: 'Kevin', age: 26, country: 'MX'};
const {username, ...values} = user;
console.log(username);
console.log(values);