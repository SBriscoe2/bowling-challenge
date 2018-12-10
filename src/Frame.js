var Frame = function() {
this.rolls = [];
};

Frame.prototype.roll = function(pins) {
  this.rolls.push(pins)
};


Frame.prototype.score = function(){
  var result = 0;
  var rollsindex = 0;

  for (var frameindex = 0; frameindex < 10; frameindex++) {
    if (this.rolls[rollsindex] === 10) {
        result += this.rolls[rollsindex] + this.rolls[rollsindex + 1] + this.rolls[rollsindex + 2];
        rollsindex += 1;
    } else if (this.rolls[rollsindex] + this.rolls[rollsindex + 1] === 10) {
        result += this.rolls[rollsindex] + this.rolls[rollsindex + 1] + this.rolls[rollsindex + 2];
        rollsindex += 2;
    } else {
        result += this.rolls[rollsindex] + this.rolls[rollsindex + 1];
        rollsindex += 2;
    }

  }
console.log(result);
  return result;
}
