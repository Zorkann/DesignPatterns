// --Command Pattern-- //

class SpecialMath {
  constructor(num) {
    this.values = [num];
  }

  get lastValue() {
    return this.values[this.values.length - 1];
  }

  add() {
    return this.values.push(this.lastValue + 1);
  }

  minus() {
    return this.values.push(this.lastValue - 1);
  }

  multi() {
    return this.values.push(this.lastValue * 2);
  }

  divide() {
    return this.values.push(this.lastValue / 2);
  }
}

class Command {
  constructor(subject) {
    this._subject = subject;
    this.commandsExecuted = [];
    this.undoCommands = [];
  }

  execute(command) {
    this.commandsExecuted.push(command);
    return this._subject[command]();
  }

  undo() {
    const lastExecutedCommand = this.commandsExecuted.pop();
    if (lastExecutedCommand) {
      this.undoCommands.push(lastExecutedCommand);
      return this._subject.values.pop();
    }
    console.log("nothing to undo");
  }

  redo() {
    const lastUndoCommand = this.undoCommands.pop();
    if (lastUndoCommand) {
      return this.execute(lastUndoCommand);
    }
    console.log("nothing to redo");
  }
}

// usage
const x = new Command(new SpecialMath(5));
x.execute("add");
x.execute("add");
x.execute("multi");
x.execute("divide");

x.undo();
x.undo();

x.redo();
x.redo();

console.log(x.commandsExecuted, x.undoCommands, x._subject.values);
