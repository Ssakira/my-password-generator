//Objects are key-value pairs that allows to store data and organize them
//properties: key-value pairs that stores data name:"Sakira"
//Methods: that are associated with object

let Car ={
  color:"black",
  model:"Tesla",
  speed:0,

  accelerate: function(increment){
    this.speed += increment;
    console.log(`Accelerating! speed is now ${this.speed} km/h`);
  },

  brake:function(decrement){
    this.speed -= decrement;
console.log(`Braking!speed is now ${this.speed} km/h`);
  },

  displayDetails: function(){
    console.log(`car Model:${this.model}, color:${this.color}, speed:${this.speed} km/h`);
  }
};


Car.accelerate(50);
Car.brake(20);
Car.displayDetails();