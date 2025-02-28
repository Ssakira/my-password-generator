function greet(name, callback) {
  console.log('GoodAfternoon' + ' ' + name);
  callback();
}

function callMe() {
  console.log('I am back here');
}
greet('Sakira', callMe);