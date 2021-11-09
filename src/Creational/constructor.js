// --Constructor Pattern-- //

// Function-based syntax
function Hero(name, specialAbility) {
  this.name = name;
  this.specialAbility = specialAbility;

  this.getDetails = function () {
    return this.name + " can " + this.specialAbility;
  };
}

// ES6 Class syntax
class HeroClass {
  constructor(name, specialAbility) {
    this._name = name;
    this._specialAbility = specialAbility;

    this.getDetails = function () {
      return `${this._name} can ${this._specialAbility}`;
    };
  }
}
