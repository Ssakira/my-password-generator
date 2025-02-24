//classical loop
console.log("For_loop:");
let num = [3, 5, 1, 2, 4];
for (i = 0; i < num.length; i++) {
  console.log(num[i]);
}

//ForEach-Loop
console.log("ForEach-loop:");
num.forEach((element) => {
  console.log(element * element);
});

//Array.from
console.log("Array.from:");
let name = "Sakira";
let arr = Array.from(name);
console.log(arr);

//for...of
console.log("for_of:");
for (let i of num) {
  console.log(i);
}

//for...in
console.log("for_in:");
for (let i in num) {
  console.log(i);
}

//map()
console.log("map():");
let arr1 = [45, 23, 21];
let a = arr1.map((value) => {
  console.log(value);
  return value + 1;
});
console.log(a);

//filter()
console.log("filter():");
let arr2 = [45, 23, 21, 0, 3, 5];
let a2 = arr2.filter((a) => {
  return a < 10;
});
console.log(a2);

//reduce()
console.log("reduce():");
let arr3 = [1, 2, 3, 5, 2, 1];
let newarr3 = arr3.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(newarr3);
