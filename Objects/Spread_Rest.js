//Spread 
//extract array or object fully
const array = [1,2]
const array2 = [...array,3,4,5]
console.log(array2);

//rest operator
function sum(...numbers){
  return numbers;
}
console.log(sum(array,array2));
