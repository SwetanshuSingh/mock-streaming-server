const interator = {
  counter: 0,
  next() {
    return {
      value: this.counter++,
      done: false,
    };
  },
};


console.log(interator.next().value);
console.log(interator.next().value);
console.log(interator.next().value);
console.log(interator.next().value);