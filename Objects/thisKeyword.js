//this keyword is used to access the property of same object
let movie = {
  name:"Robotics",
  duration:"95 minutes",

introduction: function(){
  console.log(`This movie name is ${this.name} and its duration is ${this.duration}`)
}
}
movie.introduction();
