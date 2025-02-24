const person = {
  name: "Sushank",
  age: 24,
  country: "Nepal",
  hobbies: {
    sports: ["Football", "Volleyball"],
    videoGames: ["Dota 2", "CS:GO", "FIFA"],
  },

  print: function () {
    console.log(`Following are the hobbies of ${this.name}`);
  },
};

person.print();

for (const hobbyKey in person.hobbies) {
  console.log(`Hobby category: ${hobbyKey}`);
  for (const hobby of person.hobbies[hobbyKey]) {
    console.log(hobby);
  }
}
