/* //LH
const odd=[1,3,5];
const num = [2,4,6].concat(odd);
console.log(num); */


//SH
const odd=[1,3,5];
const num = [2,4,6,...odd];
console.log(num);