// --Iterator Pattern-- //

class IteratorClass {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return { value: this.data[this.index++], done: false };
        } else {
          this.index = 0; // to reset iteration status
          return { done: true };
        }
      }
    };
  }
}

// using Generator
function* iteratorUsingGenerator(collection) {
  var nextIndex = 0;

  while (nextIndex < collection.length) {
    yield collection[nextIndex++];
  }
}

// usage
const gen = iteratorUsingGenerator(["Hi", "Hello", "Bye"]);

console.log(gen.next().value); // 'Hi'
console.log(gen.next().value); // 'Hello'
console.log(gen.next().value); // 'Bye'

const It = new IteratorClass(["Hi1", "Hello1", "Bye1"]);

for (const a of It) {
  console.log(a);
}

function makeIterator(array) {
  var nextIndex = 0;

  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true };
    }
  };
}

const It2 = makeIterator(["Hi2", "Hello2", "Bye2"]);

console.log(It2.next().value); // 'yo'
console.log(It2.next().value); // 'ya'
console.log(It2.next().done); // true
