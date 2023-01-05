const regex = /(\d{4})-(\d{2})-(\d{2})/;

const matches = regex.exec('2022-12-09');
console.table(matches);