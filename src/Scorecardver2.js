function Scorecard(){
this.FRAME_MAXIMUM = 10;
this.frames = []
this.SCORE = 0;
this.rollOne = roll1;
this.rollTwo = roll2;
};

Scorecard.prototype.frame = function(){
  return this.FRAME_MAXIMUM
}

Scorecard.prototype.score = function(){
  return this.SCORE;
}

Scorecard.prototype.roll1 = function(){
  return this.rollOne;
}

Scorecard.prototype.roll2 = function(){
  return this.rollTwo;
}

// Scorecard.prototype.bonus = function(){
//   if roll1
// }

Scorecard.prototype.addFrame = function(roll1, roll2){
  total = this.rollOne + this.rollTwo;
  this.frames.push(total);
  return total;
}

Scorecard.prototype.addTotal = function(){
  this.frames.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
}

Scorecard.prototype.final = function(){
  result = this.frames.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  if (result === 0) {
    return "Wow, a gutter game";
  } else if (result >= 300) {
    return "Wow, a Perfect Game";
  } else
    return result;
}

// Scorecard.prototype.frame = function(){
//   function frame(roll1, roll2){};
//   return;
// }
//

//
// Scorecard.prototype.runningTotal = function(){
//   this.total + this.addFrame
//
// }
