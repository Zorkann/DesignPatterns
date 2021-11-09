// --Flyweight Pattern-- //

// Pattern focused on efficient data sharing through fine-grained objects.
// It is used for efficiency and memory conservation purposes.
// This pattern can be used for any kind of caching purposes.
// In fact, modern browsers use a variant of a flyweight pattern
// to prevent loading the same images twice.

// flyweight class
class Icecream {
  constructor(flavour, price) {
    this.flavour = flavour;
    this.price = price;
  }
}

// factory for flyweight objects
class IcecreamFactory {
  constructor() {
    this._icecreams = [];
  }

  createIcecream(flavour, price) {
    let icecream = this.getIcecream(flavour);
    if (icecream) {
      return icecream;
    } else {
      const newIcecream = new Icecream(flavour, price);
      this._icecreams.push(newIcecream);
      return newIcecream;
    }
  }

  getIcecream(flavour) {
    return this._icecreams.find((icecream) => icecream.flavour === flavour);
  }
}

// usage
const factory = new IcecreamFactory();

const chocoVanilla = factory.createIcecream("chocolate and vanilla", 15);
const vanillaChoco = factory.createIcecream("chocolate and vanilla", 15);

// reference to the same object
console.log(chocoVanilla === vanillaChoco); // true
