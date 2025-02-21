let obj= {
  name: "Sakira",
  age: 21,
  social: {
    facebook: {
      ac1: "saki@gamil.com",
      ac2: "saki@gmail.com",
    },
    twitter: {
      free: {
        ac1: "saki@gmail.com",
      },
      paid: {
        ac1: "saki@gamil.com",
      }
    }
  }
}
let obj2 = JSON.parse(JSON.stringify(obj));
obj2.social.facebook.ac1 = "changed"
console.log(obj.social.facebook.ac1);
console.log(obj2.social.facebook.ac1);