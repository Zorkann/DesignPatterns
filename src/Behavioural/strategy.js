// --Strategy Pattern-- //

// It is a behavioural design pattern that allows encapsulation of alternative
// algorithms for a particular task.
// It defines a family of algorithms and encapsulates them in such a way
// that they are interchangeable at runtime without client interference or knowledge.

// encapsulation
class Commute {
  travel(transport) {
    return transport.travelTime();
  }
}

class Vehicle {
  travelTime() {
    return this._timeTaken;
  }
}

// strategy 1
class Bus extends Vehicle {
  constructor() {
    super();
    this._timeTaken = 10;
  }
}

// strategy 2
class Taxi extends Vehicle {
  constructor() {
    super();
    this._timeTaken = 5;
  }
}

// strategy 3
class PersonalCar extends Vehicle {
  constructor() {
    super();
    this._timeTaken = 3;
  }
}

// usage
const commute = new Commute();

console.log(commute.travel(new Taxi())); // 5
console.log(commute.travel(new Bus())); // 10

// good example

const db = {
  test1: {
    id: "test1",
    attack: 50,
    defence: 20
  },
  test2: {
    id: "test2",
    attack: 100,
    defence: 5
  }
};

function selectBest(scoreStrategy) {
  const found = {
    max: 0,
    item: undefined
  };

  Object.values(db).reduce((found, item) => {
    const score = scoreStrategy(item);
    if (score > found.max) {
      found.max = score;
      found.item = item;
    }
    return found;
  }, found);

  return found.item;
}

const bestDef = selectBest(({ defence }) => defence);
