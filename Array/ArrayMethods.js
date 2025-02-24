//toString()
let number = [1, 2, 3, 4, 5];
console.log(number);
let num = number.toString();
console.log("Array converted into String:", num);
console.log("TypeOf Check:", typeof num);
//join()
let a = number.join("_");
console.log("After join method:", a);
//pop()
number.pop();
console.log("After pop method:", number);
//Push()
number.push(6);
console.log("After push method:", number);
//shift()
number.shift();
console.log("After shift method:", number);
//unshift()
number.unshift(100);
console.log("After unshift method:", number);
//delete -- its not method its operator like typeof
console.log(number.length);
delete number[3];
console.log("After delete Operator:", number);
console.log(number.length);
//Sort()
let randomNum = [2, 37, 1, 117, 45, 22];
randomNum.sort();
console.log("After sorting [2, 37, 1, 117, 45, 22] numbers:", randomNum);
//reverse()
randomNum.reverse();
console.log("After reversing the sorted numbers:", randomNum);
//Splice()
const oddNums = [1, 3, 5, 7, 9, 11];
oddNums.splice(2, 3, 13, 15, 17);
console.log("After [1, 3, 5, 7, 9, 11] Splice method:", oddNums);
//slice()
const evenNums = [2, 4, 6, 8, 10];
const newnum = evenNums.slice(2,4);
console.log("After slice() [2, 4, 6, 8, 10]:",newnum);
//include()
let languages = ["JavaScript", "React", "Java"];
let check = languages.includes("Python");
console.log(check); 
//find()
let num1=[1,2,3,4]
let greaterThanThree = num1.find(num => num > 3);
console.log("After find:", greaterThanThree);
