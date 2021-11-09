// --Prototype Pattern-- //

// This pattern is an object-based creational design pattern.
// In this, we use a sort of a “skeleton”
// of an existing object to create or instantiate new objects.

const car = {
  noOfWheels: 4,
  start() {
    return "started";
  },
  stop() {
    return "stopped";
  }
};

const myCar = Object.create(car, { owner: { value: "John" } });
const myCar2 = Object.create(car, { owner: { value: "John2" } });

myCar.example = "example";
myCar.noOfWheels = 10;
myCar2.example = "example2";

console.log(myCar, "myCar");
console.log(myCar.__proto__, "myCarProto");

console.log(myCar2, "myCar2");
console.log(myCar2.__proto__, "myCarProto2");
