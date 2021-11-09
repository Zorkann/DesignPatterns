// --Singleton Pattern-- //

// If no instance of the singleton class exists then
// a new instance is created and returned,
// but if an instance already exists,
// then the reference to the existing instance is returned.

class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    this._data = data;
    Database.instance = this;
    Database.exists = true;
    return this;
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }
}

const Mongo = new Database("mongo");
const Mongo2 = new Database("mongo");

console.log(Mongo, Mongo2);

console.log(Mongo === Mongo2);
