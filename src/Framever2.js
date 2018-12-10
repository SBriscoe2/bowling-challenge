var Frame = function() {
this.rolls = [];
};

Frame.prototype.roll = function(pins) {
this.rolls.push(pins)
};

Frame.prototype.score = function() {
  var result = 0;
  var rollindex = 0;

  for (var frameindex = 0; frameindex < 10; frameindex++) {
    if (this.rolls[rollindex] === 10); {
        result += this.rolls[rollindex] + this.rolls[rollindex + 1] + this.rolls[rollindex + 2];
        rollindex += 1;
    } else if (this.rolls[rollindex] + this.rolls[rollindex + 1] === 10); {
        result += this.rolls[rollindex] + this.rolls[rollindex + 1] + this.rolls[rollindex + 2];
        rollindex +=2;
    } else {
        result += this.rolls[rollindex] +this.rolls[rollindex + 1];
        rollindex += 2;
    }
  }
  return result;
}
