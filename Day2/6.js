//write a program to print the marks of a student in an object using for in
let marks = {
  saki: 90,
  ram: 80,
  luna: 85,
};
for (let key in marks) {
  console.log(key + ":" + marks[key]);
}
